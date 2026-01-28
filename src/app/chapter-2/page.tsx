import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter 2 - A Good Thing Gone Bad | Course 101",
  description: "Chapter 2 explores humanity's unique position in creation according to Genesis.",
};

export default function Chapter2() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 2 - A Good Thing Gone Bad</h1>
      </div>

      <h2>Summary</h2>
      <p>
        This chapter explores humanity&apos;s unique position in creation according
        to Genesis. Humans received the privilege of such a special relationship
        with God, yet this relationship fundamentally included the capacity to
        reject God. This balance between privilege and freedom forms the
        chapter&apos;s central theme. We examine how this fundamental relationship
        was damaged and what the consequences of that damage mean for humanity.
      </p>

      <div className="download-section">
        <a
          href="/pdfs/04_C101_Chpt2_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter Two PDF
        </a>
        <a
          href="/pdfs/05_C101_Appendix_B_Relativism_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Appendix B - Relativism
        </a>
      </div>

      <hr />

      <h2>The Moral Argument</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/OxiAikEk2vU"
          title="The Moral Argument"
          allowFullScreen
        ></iframe>
      </div>

      <div className="nav-links">
        <Link href="/chapter-1" className="nav-link">
          &larr; Chapter 1
        </Link>
        <Link href="/chapter-3" className="nav-link primary">
          Chapter 3 &rarr;
        </Link>
      </div>
    </main>
  );
}
