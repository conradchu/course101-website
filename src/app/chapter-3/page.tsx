import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter 3 - God's Revelation | Course 101",
  description: "Chapter 3 addresses how God has revealed himself to humanity through the Bible and Jesus Christ.",
};

export default function Chapter3() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 3 - God&apos;s Revelation</h1>
      </div>

      <h2>Summary</h2>
      <p>
        If God were, as many people are fond of claiming, just a far-off,
        unconcerned deity, then we are lost forever, without hope. However, the
        Bible presents a contrasting perspective, where God actively seeks out
        humanity from the beginning of scripture. God&apos;s self-disclosure operates
        indirectly rather than with overwhelming clarity.
      </p>
      <p>
        Through what historical mechanisms has God revealed himself to humanity?
        This chapter explores divine revelation through two primary channels:
        the biblical text and the person of Jesus Christ. The material also
        addresses theological methodology, considering why God might choose
        indirect rather than direct revelation methods.
      </p>

      <div className="download-section">
        <a
          href="/pdfs/06_C101_Chpt3_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter Three PDF
        </a>
        <a
          href="/pdfs/07_C101_Appendix_C_ReligiousPluralism_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Appendix C - Religious Pluralism
        </a>
      </div>

      <div className="nav-links">
        <Link href="/chapter-2" className="nav-link">
          &larr; Chapter 2
        </Link>
        <Link href="/chapter-4" className="nav-link primary">
          Chapter 4 &rarr;
        </Link>
      </div>
    </main>
  );
}
