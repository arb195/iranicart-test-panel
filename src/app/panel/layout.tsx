import type { Metadata } from "next";
import Panel from '../../components/panel/panel'

export const metadata: Metadata = {
  title: "پنل تیکت ایرانیکارت",
  description: "ایرانیکارت :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Panel>{children}</Panel>;
}
