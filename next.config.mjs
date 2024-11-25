/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "encrypted-tbn0.gstatic.com" },
      { hostname: "fakestoreapi.com" },
      { hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
