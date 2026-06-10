import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IZEN Implant Kazakhstan",
  description: "Официальный представитель IZEN Implant в Казахстане",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}