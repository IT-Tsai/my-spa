/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    "tsx",
    "ts",
    // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
    // Instead, use `not-found.ts` as a workaround
    // "ts" is required to resolve `not-found.ts`
    // https://github.com/vercel/next.js/issues/65447
  ],
  basePath: "/my-spa",
  output: "export", // <=== enables static exports
  distDir: "dist",
  reactStrictMode: true,
  assetPrefix: "/my-spa/", // This prefix is needed to correctly load assets from the specified base path
  trailingSlash: true, // Ensures trailing slashes are added to all paths (helps with static site generation)
};

export default nextConfig;
