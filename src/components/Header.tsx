"use client";

import Link from "next/link";
import { useState } from "react";

const chapters = [
  { href: "/chapter-1", title: "Chapter 1 - What is Life?" },
  { href: "/chapter-2", title: "Chapter 2 - A Good Thing Gone Bad" },
  { href: "/chapter-3", title: "Chapter 3 - God's Revelation" },
  { href: "/chapter-4", title: "Chapter 4 - Our Problem" },
  { href: "/chapter-5", title: "Chapter 5 - Death and Resurrection of Jesus" },
  { href: "/chapter-6", title: "Chapter 6 - Our Response" },
  { href: "/chapter-7", title: "Chapter 7 - New Life of Love" },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="external-link-icon"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/acts2-logo.svg" alt="" className="logo-icon" />
            Course 101
          </Link>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <a>Chapters</a>
              <ul className="dropdown">
                {chapters.map((chapter) => (
                  <li key={chapter.href}>
                    <Link href={chapter.href}>{chapter.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/additional-resources">Additional Resources</Link>
            </li>
            <li>
              <a href="https://www.course101.online" target="_blank" rel="noopener noreferrer">
                Online Course 101
                <ExternalLinkIcon />
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger"></span>
        </button>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul>
          <li>
            <span style={{ display: "block", padding: "15px 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "14px" }}>
              Chapters
            </span>
            <ul className="folder-links">
              {chapters.map((chapter) => (
                <li key={chapter.href}>
                  <Link href={chapter.href} onClick={() => setMobileMenuOpen(false)}>
                    {chapter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/additional-resources" onClick={() => setMobileMenuOpen(false)}>
              Additional Resources
            </Link>
          </li>
          <li>
            <a href="https://www.course101.online" target="_blank" rel="noopener noreferrer">
              Online Course 101
              <ExternalLinkIcon />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
