import React from "react";
import logo from "../../images/logo.png"
import 'tw-elements';

export default function Navbar() {
  return (
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
      <img src={logo} className="mr-3 h-25 sm:h-20" alt="Megaula Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white-500 md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="/schedule" className="block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white underline" aria-current="page">Agenda tu asesoría</a>
        </li>
        <li>
          <a href="/high-school" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">Examen Preparatoria</a>
        </li>
        <li>
          <a href="/college" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">Examen Universidad</a>
        </li>
        <li>
          <a href="/college-career" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">¿Qué carrera escoger?</a>
        </li>
        <li>
          <a href="/simulator" className="block py-2 pr-4 pl-3 md:p-0 text-white hover:underline">Simuladores</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

