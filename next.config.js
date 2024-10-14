const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/messages",
        permanent: true,
      },
    ];
  },
  env: {
    ISSUES_LINK: "https://github.com/qhmedhazem/quanta/issues/new",
  },
};

module.exports = withNextIntl(nextConfig);
