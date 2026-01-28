import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapter 1 - What is Life? | Course 101",
  description: "Chapter 1 explores fundamental human questions about existence, purpose, and identity.",
};

export default function Chapter1() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 1 - What is Life?</h1>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/life.jpg"
        alt="What is Life?"
        className="chapter-image"
      />

      <h2>Summary</h2>
      <p>
        How often have you asked yourself questions such as &quot;Who am I?&quot; &quot;Why am
        I here?&quot; and &quot;Where am I going?&quot; No matter how successful and prosperous
        we may be, these questions surface in our minds again and again. The
        answers to these questions inevitably affect our priorities and the
        direction we take in life. These questions are not merely theoretical;
        they have very real and practical implications for our decisions and
        actions. This chapter introduces the fundamental human questions about
        existence, purpose, and identity that individuals frequently contemplate
        regardless of their material circumstances.
      </p>

      <div className="download-section">
        <a
          href="/pdfs/02_C101_Chpt1_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter One PDF
        </a>
        <a
          href="/pdfs/03_C101_Appendix_A_ReasonForGod_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Appendix A - The Reason for God
        </a>
      </div>

      <hr />

      <h2>The Kalam Cosmological Argument</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/6CulBuMCLg0"
          title="The Kalam Cosmological Argument"
          allowFullScreen
        ></iframe>
      </div>

      <hr />

      <h2>Audio Lectures</h2>
      <div className="resource-links">
        <Link href="/absurdity-of-life-without-god-cd1">
          Absurdity of Life Without God - Lecture Series (Part 1)
        </Link>
        <Link href="/absurdity-of-life-without-god-cd2">
          Absurdity of Life Without God - Lecture Series (Part 2)
        </Link>
      </div>

      <div className="nav-links">
        <Link href="/" className="nav-link">
          &larr; Home
        </Link>
        <Link href="/chapter-2" className="nav-link primary">
          Chapter 2 &rarr;
        </Link>
      </div>
    </main>
  );
}
