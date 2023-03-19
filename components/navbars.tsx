"use client";
import Image from "next/image";
import NextSVG from "../public/next.svg";
import Link from "next/link";
import { useState } from "react";
function Navbars() {
  const [show, toggleShow] = useState(false);
  return (
    <>
      <div className="sticky top-0 justify-between hidden w-full px-2 bg-gray-300 item-start md:flex md:px-4">
        <div className="items-center">
          <p>Europes Favourite Wedding Planning Platform</p>
        </div>
        <div className="items-center space-x-2 md:flex">
          <p>Write A Review</p>
          <p>Download App</p>
        </div>
      </div>
      <div className="sticky top-0 flex justify-between w-full px-2 bg-gray-200 md:px-4">
        <div className="flex-wrap items-center hidden space-x-2 justify-self-start md:flex justify-evenly">
          <p>Venues</p>
          <p>Vendors</p>
          <p>Photos</p>
          <p>Blog</p>
          <p>Shop</p>
        </div>
        <button
          id="navbarToggler"
          className="items-start rounded-lg ring-primary focus:ring-2 md:hidden"
        >
          {/* <span className="relative my-[6px] block h-[4px] w-[30px] bg-gray-500"></span>
          <span className="relative my-[6px] block h-[4px] w-[30px] bg-gray-500"></span>
          <span className="relative my-[6px] block h-[4px] w-[30px] bg-gray-500"></span> */}
          <div className="flex items-center justify-center w-full group/sidebar" onClick={() => toggleShow(!show)}>
            <div className="flex items-center justify-center w-12 h-12 bg-white cursor-pointer group rounded-2xl hover:bg-slate-200">
              <div className="space-y-1.5">
                <span className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover/sidebar:translate-y-1.5 group-hover/sidebar:rotate-45 group-hover/items:invisible"></span>
                <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover/sidebar:-translate-y-1.5 group-hover/sidebar:-rotate-45"></span>
              </div>
            </div>
          </div>
        </button>
        <div className="w-24 max-w-full justify-self-center">
          <a href="/" className="block w-full py-5 navbar-logo">
            <Image src={NextSVG} alt="logo" className="w-full header-logo" />
          </a>
        </div>
        <div className="flex items-center space-x-2 justify-evenly">
          <p className="hidden md:block">Real Weddings</p>

          <p className="hidden md:block">E-Invites</p>
          <Link href="/login">Login</Link>
        </div>
      </div>
      {/* SideBar */}
      <div className={`${show ? "" : "-translate-x-full "}absolute hover:shadow-lg left-0 w-64 px-2 py-4 space-y-6 text-gray-900 transition duration-200 ease-in-out transform bg-gray-100 inset-y-50 group/items md:invisible`}>
        {/* <!-- logo --> */}
        {/* <a href="#" className="flex items-center px-4 text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          
        </a> */}
        {/* <!-- nav --> */}
        <nav className="flex flex-col space-y-3">
          <Link
              href="/login"
              className="m-2 transition duration-200 rounded hover:bg-gray-200"
            >
              Login/Register
          </Link>
          <hr className="m-2 border-gray-300 " />
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            Venues
          </Link>
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            Vendors
          </Link>
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            Photos
          </Link>
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            Blog
          </Link>
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            Shop
          </Link>
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            Real Weddings
          </Link>
          <Link
            href=""
            className="m-2 transition duration-200 rounded hover:bg-gray-200"
          >
            E-Invites
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbars;
