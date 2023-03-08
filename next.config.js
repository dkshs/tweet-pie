/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["auywbkryrhcmqbtmpqrj.supabase.co"],
  },
  env: {
    SITE_NAME: process.env.SITE_NAME || "Tweet Pie",
    SITE_LOCALE: process.env.SITE_LOCALE || "pt-br",
    SITE_BASEURL: process.env.SITE_BASEURL || "http://localhost:3000",
  },
};

module.exports = nextConfig;
