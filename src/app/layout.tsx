import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const clerkPublishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  "pk_test_cmVsYXRlZC1zd2lmdC02NS5jbGVyay5hY2NvdW50cy5kZXYk";

export const metadata: Metadata = {
  title: "Newsle",
  description: "Guess the year. Beat the archive.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff7e4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider publishableKey={clerkPublishableKey}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
