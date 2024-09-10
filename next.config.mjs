/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: "/my-spa",
  output: "export", // <=== enables static exports
  distDir: "dist",
  reactStrictMode: true,
  //assetPrefix: "/my-spa/", // This prefix is needed to correctly load assets from the specified base path
  trailingSlash: true, // Ensures trailing slashes are added to all paths (helps with static site generation)
};

export default nextConfig;
