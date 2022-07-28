import React from "react";
import Navbar from "../Navbar/navbar";

export default function Layout({ children }: { children: any }) {
  return (
<div className="Layout">
  <Navbar />
  <div className="content">{children}</div>
  <footer className="p-4 md:flex md:justify-between md:p-6 dark:bg-gray-900">
    <span className="text-sm text-white">© 2022 <a href="/" className="hover:underline">Megaula™</a>. All Rights Reserved. </span>
    <ul className="flex md:space-x-8 text-sm">
      <li>
        <a href="/contact" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">Contacto</a>
      </li>
      <li>
        <a href="/privacy" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">Aviso de privacidad</a>
      </li>
      <li>
        <a href="/legal" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">Aviso legal</a>
      </li>
    </ul>
  </footer>
</div>
  );
}
