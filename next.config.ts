import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This creates the static "out" folder for GitHub
  images: {
    unoptimized: true,   // Essential because GitHub doesn't have an image server
  },
  // If your GitHub repo name is NOT your username (e.g., "my-portfolio"), 
  // uncomment the line below and put your repo name there:
  // basePath: '/portfolio', 
};

export default nextConfig;