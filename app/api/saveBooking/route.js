import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.json();

    // 📁 Créer un dossier temporaire local (si inexistant)
    const dir = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // ✅ Sauvegarde dans /tmp/bookings.xlsx
    const filePath = path.join(dir, "bookings.xlsx");

    let workbook;
    let worksheet;
    let existingData = [];

    // 📖 Si le fichier existe déjà, on le lit
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      worksheet = workbook.Sheets["Réservations"];
      existingData = XLSX.utils.sheet_to_json(worksheet);
    } else {
      workbook = XLSX.utils.book_new();
    }

    // ➕ Ajouter la nouvelle réservation
    existingData.push({
      "Service": data.serviceName || "",
      "Date": data.date,
      "Heure": data.time,
      "Nom complet": data.name,
      "Email": data.email,
      "Téléphone": data.phone,
    });

    // 🧾 Convertir les données JSON → feuille Excel
    worksheet = XLSX.utils.json_to_sheet(existingData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Réservations");

    // 💾 Sauvegarder physiquement sur le disque
    XLSX.writeFile(workbook, filePath);

    console.log("✅ Réservation enregistrée dans :", filePath);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Erreur lors de la sauvegarde Excel :", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
