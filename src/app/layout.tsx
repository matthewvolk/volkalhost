import { Nav } from "@/components/Nav";

import "./globals.css";
import { GoogleAnalytics } from "@/components/GA";

export const metadata = {
  title: "Matthew Volk - Software Engineer",
  description: "Matthew Volk is a software engineer based in Austin, Texas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className="container mx-auto p-4">
        <Nav />
        {children}
      </body>
    </html>
  );
}