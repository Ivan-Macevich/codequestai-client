import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeQuestAI Dashboard | Your Learning Journey",
  description: "Access your personalized learning dashboard, track progress, connect with mentors, and manage your educational goals.",
  keywords: ["mentor dashboard", "learning management", "progress tracking", "mentorship platform", "educational goals"],
  openGraph: {
    title: "Mentor Dashboard | Your Learning Journey",
    description: "Access your personalized learning dashboard, track progress, connect with mentors, and manage your educational goals.",
    type: "website",
    images: [
      {
        url: "/dashboard-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mentor Dashboard Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentor Dashboard | Your Learning Journey",
    description: "Access your personalized learning dashboard, track progress, connect with mentors, and manage your educational goals.",
    images: ["/dashboard-og.jpg"],
  },
  robots: {
    index: false, // Since this is the app area, we might want to prevent indexing of the dashboard
    follow: false,
  },
};

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
