import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/mindmap', destination: '/mindmap.html' },
      { source: '/worksheet', destination: '/worksheet.html' },
    ];
  },
};

export default nextConfig;
