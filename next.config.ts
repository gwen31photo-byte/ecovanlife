import type { NextConfig } from "next";
import { vanlifeEnabled } from "./src/content/features";

const config: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return vanlifeEnabled
      ? []
      : [{ source: "/vanlife", destination: "/", permanent: false }];
  },
};

export default config;
