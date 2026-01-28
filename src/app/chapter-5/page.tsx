import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter 5 - Death and Resurrection of Jesus | Course 101",
  description: "Chapter 5 examines the significance of Jesus's death and resurrection.",
};

export default function Chapter5() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Chapter 5 - Death and Resurrection of Jesus</h1>
      </div>

      <h2>Summary</h2>
      <p>
        The chapter opens by contrasting idealized nativity imagery with
        historical reality. Jesus was born in humble circumstances, lacking
        proper facilities. Jesus entered the world as a baby who didn&apos;t even
        have a proper place in which to be birthed, requiring use of an animal
        stable and feeding trough.
      </p>
      <p>
        This lowly birth contradicts common expectations about how a world
        savior should arrive. Unless we understand why Jesus was born in such a
        lowly place, we will never understand the heart of God. This chapter
        explores the meaning and significance of Jesus&apos;s death and resurrection
        for humanity.
      </p>

      <div className="download-section">
        <a
          href="/pdfs/09_C101_Chpt5_20210902.pdf"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter Five PDF
        </a>
      </div>

      <hr />

      <h2>The Resurrection Argument</h2>
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/92484568"
          title="The Resurrection Argument"
          allowFullScreen
        ></iframe>
      </div>

      <div className="nav-links">
        <Link href="/chapter-4" className="nav-link">
          &larr; Chapter 4
        </Link>
        <Link href="/chapter-6" className="nav-link primary">
          Chapter 6 &rarr;
        </Link>
      </div>
    </main>
  );
}
