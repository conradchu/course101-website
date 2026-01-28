import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Absurdity of Life Without God (CD2) | Course 101",
  description: "Audio lectures by William Lane Craig on the absurdity of life without God - Part 2 of 2.",
};

const tracks = [
  { num: 1, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e998e4b0d5047ab3e00a/1391061400837/2-01-Track-1.mp3", duration: "4:58" },
  { num: 2, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e93be4b065f8577b67d3/1391061307846/2-02-Track-2.mp3", duration: "4:58" },
  { num: 3, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e928e4b0d5047ab3df61/1391061288170/2-03-Track-3.mp3", duration: "5:01" },
  { num: 4, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e8e6e4b065f8577b6727/1391061222126/2-04-Track-4.mp3", duration: "4:59" },
  { num: 5, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e868e4b0d5047ab3de2f/1391061096920/2-05-Track-5.mp3", duration: "4:59" },
  { num: 6, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e8bde4b0d5047ab3deb0/1391061181827/2-06-Track-6.mp3", duration: "5:02" },
  { num: 7, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9e7d8e4b016bf94641cae/52e9e883e4b065f8577b6677/1391061123948/2-07-Track-7.mp3", duration: "5:38" },
];

export default function AbsurdityCd2() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Absurdity of Life Without God CD2</h1>
      </div>

      <p>
        <strong>Speaker:</strong> William Lane Craig
      </p>
      <p>
        This audio lecture series explores the philosophical implications of
        atheism and argues that without God, life ultimately has no meaning,
        value, or purpose. Part 2 of 2.
      </p>

      <div className="audio-section">
        <h3>Lecture Tracks (Part 2 of 2)</h3>
        {tracks.map((track) => (
          <div key={track.num} className="audio-track">
            <span>Track {track.num}</span>
            <audio controls preload="none">
              <source src={track.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <span>{track.duration}</span>
          </div>
        ))}
      </div>

      <hr />

      <p>
        <Link href="/absurdity-of-life-without-god-cd1">
          &larr; Back to Part 1
        </Link>
      </p>
      <p>
        <Link href="/chapter-1">&larr; Back to Chapter 1</Link>
      </p>
    </main>
  );
}
