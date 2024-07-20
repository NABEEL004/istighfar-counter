import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 bottom-0 absolute">
      <aside>
        <p>Copyright © <Link target="_blank" href="https://nabeel-mbab.netlify.app">Nabeel Muhammad </Link>{new Date().getFullYear()} </p>
      </aside>
    </footer>
  );
};

export default Footer;
