import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/predict",
        destination: "http://127.0.0.1:5959/api/predict", // Flask server URL
      },
      {
        source: "/api/train",
        destination: "http://127.0.0.1:5959/api/train", // Flask server URL
      },
    ];
  },
};

export default nextConfig;
