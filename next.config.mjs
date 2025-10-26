/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ La section eslint n’est plus reconnue, donc on la retire
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },

  // ✅ Cette option pour TypeScript reste valide
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Garde l’option images si tu ne veux pas d’optimisation d’images Next
  images: {
    unoptimized: true,
  },

  // 💡 (Facultatif) Si tu veux désactiver eslint de façon moderne :
  // outputFileTracingRoot: process.cwd(),
}

export default nextConfig
  