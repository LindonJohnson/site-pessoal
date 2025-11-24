import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeScrollProvider } from "@/components/theme-scroll-provider-blog";
import "./globals.css";

export const metadata: Metadata = {
  title: 'LindonDeveloper - blog',
  description: 'Created by lindonDeveloper',
  generator: '#',
  icons: {
    icon: '/cerebro.ico',
    shortcut: '/cerebro.ico',
    apple: '/cerebro.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeScrollProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
