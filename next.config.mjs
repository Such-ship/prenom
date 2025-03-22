/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages needs this when deployed to a subdirectory
  // You might need to change this to match your repository name
  basePath: process.env.NODE_ENV === "production" ? "/baby-name" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
