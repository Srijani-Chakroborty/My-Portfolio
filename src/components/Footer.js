import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark:text-light w-full border-t border-dark/10 dark:border-light/10 font-medium text-sm flex flex-row items-center justify-center py-6 px-10 lg:px-8 md:px-6 sm:px-4">
      <div>
        Built by <span className="text-primary dark:text-primaryDark">&#9825;</span>{" "}
        <Link className="underline underline-offset-2" href="/">
          Srijani
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
