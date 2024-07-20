import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 bottom-0 absolute">
      <aside>
        <p>Copyright © Nabeel Muhammad {new Date().getFullYear()} </p>
      </aside>
    </footer>
  );
};

export default Footer;
