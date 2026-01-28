import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter 6 - Our Response | Course 101",
  description: "Chapter 6 focuses on how individuals personally respond to God's offer of salvation.",
};

export default function Chapter6() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 6 - Our Response</h1>
      </div>

      <h2>Summary</h2>
      <p>
        Up to this point in the course, we have described the condition of man
        and God&apos;s initiative in saving man from his dire predicament. This
        chapter focuses on how individuals personally respond to God&apos;s offer of
        salvation.
      </p>
      <p>
        What does it mean to accept God&apos;s gift? How do we respond to the message
        of the gospel? This chapter explores the nature of faith, repentance,
        and what it means to begin a relationship with God.
      </p>

      <div className="download-section">
        <a
          href="/pdfs/10_C101_Chpt6_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter Six PDF
        </a>
      </div>

      <div className="nav-links">
        <Link href="/chapter-5" className="nav-link">
          &larr; Chapter 5
        </Link>
        <Link href="/chapter-7" className="nav-link primary">
          Chapter 7 &rarr;
        </Link>
      </div>
    </main>
  );
}
