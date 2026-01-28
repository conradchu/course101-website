import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Absurdity of Life Without God (CD1) | Course 101",
  description: "Audio lectures by William Lane Craig on the absurdity of life without God - Part 1 of 2.",
};

const tracks = [
  { num: 1, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e6b6e4b0eba4f76efb84/1391060662985/1-01-Track-1.mp3", duration: "4:59" },
  { num: 2, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e6afe4b0cc7da82ddbff/1391060655956/1-02-Track-2.mp3", duration: "4:59" },
  { num: 3, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e660e4b0cc7da82ddb6c/1391060576876/1-03-Track-3.mp3", duration: "4:59" },
  { num: 4, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e664e4b0eba4f76efaf6/1391060580187/1-04-Track-4.mp3", duration: "5:03" },
  { num: 5, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e60fe4b0eba4f76efa6c/1391060495404/1-05-Track-5.mp3", duration: "4:57" },
  { num: 6, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e609e4b0cc7da82ddaba/1391060489784/1-06-Track-6.mp3", duration: "4:59" },
  { num: 7, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e5b7e4b0cc7da82dda40/1391060407522/1-07-Track-7.mp3", duration: "5:00" },
  { num: 8, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e5bfe4b0eba4f76ef9fe/1391060415201/1-08-Track-8.mp3", duration: "4:59" },
  { num: 9, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e563e4b0cc7da82dd9c4/1391060323968/1-09-Track-9.mp3", duration: "5:01" },
  { num: 10, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e56ce4b0eba4f76ef951/1391060332982/1-10-Track-10.mp3", duration: "4:58" },
  { num: 11, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e510e4b0cc7da82dd93d/1391060240434/1-11-Track-11.mp3", duration: "5:00" },
  { num: 12, url: "https://static1.squarespace.com/static/52e9d379e4b07a9b986d5879/52e9d645e4b07a9b986d5d5b/52e9e51ae4b0eba4f76ef8c4/1391060250710/1-12-Track-12.mp3", duration: "5:46" },
];

export default function AbsurdityCd1() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Absurdity of Life Without God CD1</h1>
      </div>

      <p>
        <strong>Speaker:</strong> William Lane Craig
      </p>
      <p>
        This audio lecture series explores the philosophical implications of
        atheism and argues that without God, life ultimately has no meaning,
        value, or purpose. Part 1 of 2.
      </p>

      <div className="audio-section">
        <h3>Lecture Tracks (Part 1 of 2)</h3>
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
        <Link href="/absurdity-of-life-without-god-cd2">
          Continue to Part 2 &rarr;
        </Link>
      </p>
      <p>
        <Link href="/chapter-1">&larr; Back to Chapter 1</Link>
      </p>
    </main>
  );
}
