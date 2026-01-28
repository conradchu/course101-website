import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter 4 - Our Problem | Course 101",
  description: "Chapter 4 examines the human condition and our need for salvation.",
};

export default function Chapter4() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 4 - Our Problem</h1>
      </div>

      <h2>Summary</h2>
      <p>
        In the previous chapter, we examined God&apos;s self-disclosure to man in the
        form of the Bible and most fully in the person of Jesus, emphasizing
        Jesus&apos;s claim to deity. But the gospels focus on Jesus&apos;s mission rather
        than identity alone, presenting his message about humanity being sinners
        under the wrath of God who need to repent.
      </p>
      <p>
        In Chapter 2, we established the consequences of rejecting God, resulting
        in idolatry, moral relativism, and enmity toward others. This chapter
        dives deeper into understanding the human problem and why we need a
        savior.
      </p>

      <div className="download-section">
        <a
          href="/pdfs/08_C101_Chpt4_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter Four PDF
        </a>
      </div>

      <div className="nav-links">
        <Link href="/chapter-3" className="nav-link">
          &larr; Chapter 3
        </Link>
        <Link href="/chapter-5" className="nav-link primary">
          Chapter 5 &rarr;
        </Link>
      </div>
    </main>
  );
}
