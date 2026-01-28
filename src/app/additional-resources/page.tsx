import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Additional Resources | Course 101",
  description: "Recommended books and additional resources for Course 101.",
};

const books = [
  {
    title: "The Reason for God",
    author: "Timothy Keller",
    image: "/images/reason-for-god.jpg",
    link: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493",
  },
  {
    title: "Letters from a Skeptic",
    author: "Gregory A. Boyd & Edward Boyd",
    image: "/images/letters-from-skeptic.jpg",
    link: "https://www.amazon.com/Letters-Skeptic-Son-Wrestle-Questions/dp/0781437024",
  },
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    image: "/images/mere-christianity.jpg",
    link: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926",
  },
  {
    title: "The Problem of Pain",
    author: "C.S. Lewis",
    image: "/images/problem-of-pain.jpg",
    link: "https://www.amazon.com/Problem-Pain-C-S-Lewis/dp/0060652969",
  },
  {
    title: "The Universe Next Door",
    author: "James W. Sire",
    image: "/images/universe-next-door.jpg",
    link: "https://www.amazon.com/Universe-Next-Door-Worldview-Catalog/dp/0830838503",
  },
];

export default function AdditionalResources() {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>Additional Resources</h1>
      </div>

      <p>
        Here are some recommended books that complement the Course 101 material
        and provide deeper exploration of the topics covered in the course.
      </p>

      <div className="books-grid">
        {books.map((book) => (
          <a
            key={book.title}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="book-item"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </a>
        ))}
      </div>

      <hr />
    </main>
  );
}
