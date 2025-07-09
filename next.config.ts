import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  i18n,
};
export default nextConfig;
