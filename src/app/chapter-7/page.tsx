import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter 7 - New Life of Love | Course 101",
  description: "Chapter 7 explores what it means to live the new life in Christ.",
};

export default function Chapter7() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 7 - New Life of Love</h1>
      </div>

      <h2>Summary</h2>
      <p>
        This chapter revisits the foundational question posed at the course&apos;s
        start: &quot;What is life?&quot; We must reconsider this question with appropriate
        gravity, particularly in light of human mortality. We can ponder life
        seriously only in light of death.
      </p>
      <p>
        Having explored the gospel message and our response to it, we now
        examine what the new life in Christ looks like. What does it mean to
        live a life of love? How does following Jesus transform our daily
        existence and relationships?
      </p>

      <div className="download-section">
        <a
          href="/pdfs/11_C101_Chpt7_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter Seven PDF
        </a>
      </div>

      <div className="nav-links">
        <Link href="/chapter-6" className="nav-link">
          &larr; Chapter 6
        </Link>
        <Link href="/additional-resources" className="nav-link primary">
          Additional Resources &rarr;
        </Link>
      </div>
    </main>
  );
}
