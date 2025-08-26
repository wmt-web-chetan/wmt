import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/tailwind.css"; // Adjust path as needed

export const metadata = {
  title: "Webmobtech",
  description: "Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
