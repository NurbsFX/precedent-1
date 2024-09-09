/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

// next.config.js
module.exports = {
  images: {
    domains: ['www.veto-neuilly.fr'], // Ajoute les domaines d'images externes ici
  },
};


module.exports = nextConfig;
