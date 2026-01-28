import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Course 101</h1>
      </div>

      <p>
        This is a 7 week course, meeting once a week for 1-1.5 hours each. The
        reading for each chapter will take between 1-2 hours to do outside of
        class, and each week&apos;s meeting will supplement the material with a
        lecture and discussion. You can take the course in a classroom format,
        or 1-on-1. See the video below for more info.
      </p>

      <hr />

      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/116723202?wmode=opaque"
          title="Course 101 Trailer"
          allowFullScreen
        ></iframe>
      </div>

      <div className="content-grid">
        <div>
          <p>
            Course 101, a seven-week course developed by{" "}
            <a href="https://acts2.network" target="_blank" rel="noopener noreferrer">
              Acts2 Network
            </a>
            , gives an intellectual basis for answers to some of the most
            commonly asked questions about the Christian faith and addresses
            misconceptions about God, Jesus and the Bible. Both those who have
            experience with Christianity and those just beginning to consider it
            will have the chance to explore how Christianity addresses questions
            about the meaning of life, our purpose and the longings of our
            hearts.
          </p>
        </div>
        <div className="chapter-list">
          <h2>The Seven Chapters</h2>
          <ul>
            <li>
              <Link href="/chapter-1">Chapter 1 - What is Life?</Link>
            </li>
            <li>
              <Link href="/chapter-2">Chapter 2 - A Good Thing Gone Bad</Link>
            </li>
            <li>
              <Link href="/chapter-3">Chapter 3 - God&apos;s Revelation</Link>
            </li>
            <li>
              <Link href="/chapter-4">Chapter 4 - Our Problem</Link>
            </li>
            <li>
              <Link href="/chapter-5">Chapter 5 - Death and Resurrection of Jesus</Link>
            </li>
            <li>
              <Link href="/chapter-6">Chapter 6 - Our Response</Link>
            </li>
            <li>
              <Link href="/chapter-7">Chapter 7 - New Life of Love</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr />
    </main>
  );
}
