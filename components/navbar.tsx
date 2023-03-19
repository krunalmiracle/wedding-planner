"use client";
import Image from "next/image";
import IconWeb from "../public/icon.svg";
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [show, toggleShow] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY.toString());
  };

  useEffect(() => {
    let backgroundTransparacyVar = parseFloat(clientWindowHeight) / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <>
      <div className="absolute top-0 justify-between hidden w-full px-2 bg-gray-300 item-start md:flex md:px-4">
        <div className="items-center">
          <p>Europes Favourite Wedding Planning Platform</p>
        </div>
        <div className="items-center space-x-2 md:flex">
          <p>Write A Review</p>
          <p>Download App</p>
        </div>
      </div>
      <div className="fixed w-full ">
        {/* Website NavBar */}
        <div
          className="flex justify-between px-2 h-[75px] md:px-4"
          style={{
            background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          }}
        >
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
            <div
              className="flex items-center justify-center w-full group/sidebar"
              onClick={() => toggleShow(!show)}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white cursor-pointer group rounded-2xl hover:bg-slate-200">
                <div className="space-y-1.5">
                  <span  className={`${
            show ? "translate-y-1.5 rotate-45 " : ""
          }block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out`}></span>
                  <span className={`${
            show ? "w-10 -translate-y-1.5 -rotate-45 " : ""
          }block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out`} ></span>
                </div>
              </div>
            </div>
          </button>
          <div className="w-24 max-w-full justify-self-center">
            <Link href="/" className="block w-full navbar-logo">
              <Image src={IconWeb} alt="logo" className="w-full header-logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-2 justify-evenly">
            <p className="hidden md:block">Real Weddings</p>

            <p className="hidden md:block">E-Invites</p>
            <Link href="/login">Login</Link>
          </div>
        </div>

        {/* Mobile SideBar */}
        <div
          className={`${
            show ? "" : "hidden "
          }hover:drop-shadow-2xl drop-shadow-lg w-64 px-2 py-4 space-y-6 text-gray-900 transition duration-200 ease-in-out transform bg-gray-100 md:invisible`}
        >
          {/* Mobile Links */}
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
      </div>
    </>
  );
}

export default Navbar;
