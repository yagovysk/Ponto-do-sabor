import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import "../../App.css";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0f1c37] p-4 flex justify-between items-center relative">
      <img src={logo} className="w-20 rounded-full md:w-30" alt="Logo" />
      <ul className="hidden md:flex gap-4 justify-center flex-1 items-center">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer poppins-css hover:text-gray-400 text-white transition duration-300 ease-in-out"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            className="cursor-pointer poppins-css hover:text-gray-400 text-white transition duration-300 ease-in-out"
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            to="section3"
            smooth={true}
            duration={500}
            className="cursor-pointer poppins-css hover:text-gray-400 text-white transition duration-300 ease-in-out"
          >
            Nosso Cardápio
          </Link>
        </li>
        <a
          href="https://wa.me/+5561981326059?text=Olá, vim pelo site, gostaria de saber das pizzas e hambúrgueres."
          target="blank"
          className="flex px-2 py-2.5 justify-center items-center text-[#0f1c37] bg-[#f8e5ac] poppins-css text-m hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out rounded-sm"
        >
          Entre em contato!
        </a>
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform md:hidden z-10`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl absolute top-4 right-4"
        >
          <FiX />
        </button>
        <ul className="flex flex-col gap-4 mt-10">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-sans hover:text-gray-400 text-white"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="sobre"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-sans hover:text-gray-400 text-white"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="section3"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-sans hover:text-gray-400 text-white"
            >
              Nosso Cardápio
            </Link>
          </li>
          <a
            href="https://wa.me/+5561981326059?text=Olá, vim pelo site, gostaria de saber das pizzas e hambúrgueres."
            target="blank"
            className="flex p-2 justify-center items-center text-[#050a30] bg-[#f8e5ac] font-sans text-sm hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out rounded-sm"
          >
            Entre em contato!
          </a>
        </ul>
      </div>
    </nav>
  );
}
