import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves under /good-fella-clone in production
  basePath: isProd ? "/good-fella-clone" : "",
  assetPrefix: isProd ? "/good-fella-clone/" : "",
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true,
};

export default nextConfig;
