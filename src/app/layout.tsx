import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeQuestAI - Your Personal Learning Assistant",
  description: "Enhance your learning journey with personalized mentorship and guidance. Get expert advice, track your progress, and achieve your educational goals.",
  keywords: ["mentor", "education", "learning", "personal development", "online mentorship", "tutoring"],
  authors: [{ name: "CodeQuestAI" }],
  creator: "CodeQuestAI",
  publisher: "CodeQuestAI",
  metadataBase: new URL("https://codequestai.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codequestai.com",
    title: "CodeQuestAI - Your Personal Learning Assistant",
    description: "Enhance your learning journey with personalized mentorship and guidance.",
    siteName: "CodeQuestAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeQuestAI - Your Personal Learning Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeQuestAI - Your Personal Learning Assistant",
    description: "Enhance your learning journey with personalized mentorship and guidance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
