import Image from "next/image";
import NextSVG from "../public/next.svg";
import Link from "next/link";
function Navbars() {
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
          <p >Shop</p>
        </div>
        <button
          id="navbarToggler"
          className="items-start rounded-lg ring-primary focus:ring-2 md:hidden"
        >
          {/* <span className="relative my-[6px] block h-[4px] w-[30px] bg-gray-500"></span>
          <span className="relative my-[6px] block h-[4px] w-[30px] bg-gray-500"></span>
          <span className="relative my-[6px] block h-[4px] w-[30px] bg-gray-500"></span> */}
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white cursor-pointer group rounded-2xl hover:bg-slate-200">
              <div className="space-y-1.5">
                <span className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
              </div>
            </div>
          </div>
        </button>
        <div className="w-24 max-w-full justify-self-center">
          <a href="/" className="block w-full py-5 navbar-logo">
            <Image
              src={NextSVG}
              alt="logo"
              className="w-full header-logo"
            />
          </a>
        </div>
        <div className="flex items-center space-x-2 justify-evenly">
        
        <p className="hidden md:block">Real Weddings</p>
          
          <p className="hidden md:block">E-Invites</p>
          <p>Login</p>
        </div>
      </div>
    </>
  );
}

export default Navbars;
