import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/mindmap', destination: '/mindmap.html' },
    ];
  },
};

export default nextConfig;
