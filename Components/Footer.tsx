import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./../public/assets/Logofooter.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full md:h-[60vh] lg:h-[80vh]  bg-green-700  ">
      <section className="flex h-5/6 md:h-4/6 overflow-hidden md:flex-row flex-col w-full justify-between">
        <Link
          href="/"
          className="logo h-3/6 justify-start items-center py-10 md:py-0 my-auto flex  flex-col md:ml-10"
        >
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="footer-nav w-full mt-0 md:mt-10 md:flex-wrap  md:h-4/6 my-auto text-white lg:w-4/6 flex flex-col md:flex-row items-center justify-center md:justify-evenly">
          <ul className="flex px-4 flex-col md:h-full items-center md:items-start justify-evenly">
            <li className="mb-5 md:mb-0">
              <h2 className="font-semibold text-lg">Ogun Techies</h2>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="/About">About us</Link>
            </li>
            <li className="mb-5 md:mb-0">Team</li>
            <li className="mb-5 md:mb-0">Gallery</li>
            <li className="mb-5 md:mb-0">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
          <ul className="flex px-4 flex-col md:h-full items-center md:items-start justify-evenly">
            <li className="mb-5 md:mb-0">
              <h2 className="font-semibold text-lg">More</h2>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="/Merch">Merch</Link>
            </li>
            <li className="mb-5 md:mb-0">Events</li>
            <li className="mb-5 md:mb-0">
              <Link href="/Blog">Blog</Link>
            </li>
            <li className="mb-5 md:mb-0">Donate</li>
          </ul>
          <ul className="flex px-4 flex-col md:h-full items-center md:items-start justify-evenly">
            <li className="mb-5 md:mb-0">
              <h2 className="font-semibold text-lg">Connect</h2>
            </li>
            <li className="mb-5 md:mb-0">Facebook</li>
            <li className="mb-5 md:mb-0">Instagram</li>
            <li className="mb-5 md:mb-0">Twitter</li>
            <li className="mb-5 md:mb-0">Linkedin</li>
          </ul>
        </div>
        <div className="footer-subscribe flex md:h-4/6 my-auto justify-center md:justify-start flex-col items-center lg:mr-4 md:mr-4 md:w-2/6 ">
          <div className="w-10/12 mx-auto md:w-full">
            <h2 className="font-bold text-center md:text-start  text-base md:text-2xl text-white mt-6 mb-4">
              Subscribe to get latest updates
            </h2>

            <form className="flex md:flex-row  md:flex-wrap lg:flex-nowrap  flex-col ">
              <input
                type="email"
                placeholder="Enter your mail"
                className="p-3  border-2 text-white outline-none mb-3 md:mb-0 bg-green-700 border-white border-solid"
              />
              <button className="px-4 py-3 font-medium md:font-semibold text-xl  bg-white text-green-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="afobaje flex justify-center my-10 md:my-6 items-center">
        <p className="text-white ">
          {" "}
           Built with love by{" "}
          <a
            href="https://afobaje.netlify.app"
            className="hover:text-green-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Afobaje
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}
