import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChigoLite - MERN Stack Developer",
  description:
    "Portfolio of ChigoLite, a full-stack developer with 4+ years of MERN expertise, delivering scalable, user-centric solutions.",
  keywords: [
    "MERN",
    "full-stack",
    "React",
    "Node.js",
    "portfolio",
    "developer",
  ],
  openGraph: {
    title: "ChigoLite - MERN Stack Developer",
    description:
      "Explore ChigoLite's portfolio showcasing full-stack development with React, Node.js, MongoDB, and DevOps.",
    url: "https://chigolite.vercel.app",
    siteName: "ChigoLite Portfolio",
    images: [{ url: "https://chigolite.vercel.app/bob.jpeg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChigoLite - MERN Stack Developer",
    description:
      "Discover ChigoLite's full-stack development portfolio with MERN expertise.",
    images: ["https://chigolite.vercel.app/bob.jpeg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="pink" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ChigoLite",
              jobTitle: "MERN Stack Developer",
              url: "https://chigolite.vercel.app",
              sameAs: [
                "https://github.com/ChigoLite",
                "https://www.linkedin.com/in/aka-cornelius-489835252",
              ],
              description:
                "Full-stack developer with 4+ years of MERN expertise, delivering scalable, user-centric solutions.",
            }),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR-GA-ID');
      `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
