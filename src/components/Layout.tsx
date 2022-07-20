import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="Layout">
      <Navbar />
      <div className="content">{children}</div>
<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Megaula™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/contact" className="mr-4 hover:underline md:mr-6 ">Contacto</a>
        </li>
        <li>
            <a href="/privacy" className="mr-4 hover:underline md:mr-6">Aviso de privacidad</a>
        </li>
        <li>
            <a href="/legal" className="mr-4 hover:underline md:mr-6">Aviso legal</a>
        </li>
    </ul>
</footer>
    </div>
  );
}
