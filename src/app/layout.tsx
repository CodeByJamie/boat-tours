import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
      title: "Ballachulish Boat Tours",
      description: "Boat Tour Design One",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en" className="!scroll-smooth">
                  <body>
                        {children}
                  </body>
            </html>
      );
}
