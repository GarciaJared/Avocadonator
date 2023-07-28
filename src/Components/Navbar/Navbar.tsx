import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Blog Post</Link>
            </li>
          </ul>
        </menu>
      </nav>
    </div>
  );
};
export default Navbar;
