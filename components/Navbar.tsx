"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <nav className="relative z-30 h-4 py-5 mt-4 flexBetween max-container md:mt-0 md:h-full padding-container">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={74} />
      </Link>
      <ul className="hidden h-full gap-12 mx-3 text-center md:flex text-nowrap">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden ml-2 md:flexCenter">
        <Button
          type={"button"}
          title={"Login"}
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        onClick={() => {
          setSideMenu(!sideMenu);
        }}
        src={`${sideMenu ? "/dark-close.svg" : "/menu.svg"}`}
        alt="menu"
        width={32}
        height={32}
        className={`${
          sideMenu && "fixed h-8"
        } z-20 cursor-pointer right-6 md:hidden`}
      />

      {/* Hamburger Menu */}
      <ul
        className={
          !sideMenu
            ? "md:hidden fixed top-0 left-full flex flex-col w-1/2 h-screen pt-14 bg-gray-10 translate-x-1/2 transition-all ease-in-out duration-300"
            : "md:hidden fixed top-0 left-0 flex flex-col w-1/2 h-screen space-y-6 pt-14 bg-gray-10 translate-x-full transition-all ease-in-out duration-300"
        }>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-black flexCenter cursor-pointer py-1.5 transition-all hover:font-bold tracking-wider">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
