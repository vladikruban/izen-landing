import type { NextConfig } from "next";

// Мини-апп сотрудников живёт на нашем сервере (вместе с Telegram-ботом).
// Vercel незаметно пересылает всё, что под /app, туда — в браузере адрес остаётся www.izen.kz/app.
const APP_SERVER = "https://79-76-124-43.sslip.io";

const nextConfig: NextConfig = {
  // не перекидывать /app/ → /app, иначе приложение «на экране Домой» теряет свою область
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: "/app", destination: `${APP_SERVER}/app/` },
      { source: "/app/:path*", destination: `${APP_SERVER}/app/:path*` },
    ];
  },
};

export default nextConfig;
