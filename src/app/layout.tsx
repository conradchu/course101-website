import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "Course 101 | Acts2 Network",
  description: "Christian Foundation Course - A seven-week course that gives an intellectual basis for answers to some of the most commonly asked questions about the Christian faith.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Header />
        {children}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <p className="footer-title">Course 101</p>
              <p className="footer-tagline">A Christian Foundation Course</p>
            </div>
            <div className="footer-links">
              <a href="https://acts2.network" target="_blank" rel="noopener noreferrer">Acts2 Network</a>
              <span className="footer-divider">|</span>
              <a href="https://www.course101.online" target="_blank" rel="noopener noreferrer">Online Course</a>
            </div>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Acts2 Network. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
