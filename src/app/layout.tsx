import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "پنل تیکت ایرانیکارت",
  description: "ایرانیکارت :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
