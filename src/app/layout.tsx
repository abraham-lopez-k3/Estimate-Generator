import Header from "@/components/misc/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProviderWrapper from "@/contexts/ThemeProviderWrapper";
import { Paper } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Estimate Generator",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen">
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>
            <Paper square sx={{ backgroundColor: "surface" }}>
              <Header />
              {children}
            </Paper>
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
