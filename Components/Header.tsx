import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import Logo from "./../public/assets/Logo.svg";

export default function Header() {
  let [clientHeight, setClientHeight] = useState(0);
  let [fixedHeader, setFixedHeader] = useState(false);
  let [hiddenNav, setHiddenNav] = useState(false)

  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      return setClientHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const check=useCallback(()=>{
    if (window.pageYOffset > clientHeight) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  },[])

  

  useEffect(() => {
    window.addEventListener("scroll", check);
    return () => {
      window.removeEventListener("scroll", check);
    };
  }, [fixedHeader, clientHeight,check]);

  return (
    <header className="block w-full ">
      <div
        ref={measuredRef}
        className={`flex px-12 justify-between duration-200 transition-all  ${fixedHeader
          ? "fixed w-11/12 mx-auto items-center top-0 py-4 left-4 md:left-14 z-30 mt-2 shadow shadow-slate-300 bg-white rounded-full"
          : "w-full py-6"
          } `}
      >
        <Link href="/" onClick={() => setHiddenNav(false)} className="logo w-1/5 text-2xl">
          <Image src={Logo} alt="logo" priority />
        </Link>
        <nav className="w-2/5 md:w-3/5 lg:w-2/5 flex flex-row justify-end md:justify-center items-center">
          <ul className="md:flex hidden justify-between w-full">
            <li className="active:text-green-400 hover:text-green-400">
              <Link href="/About" className="font-medium">
                About
              </Link>
            </li>
            <li className="active:text-green-400 hover:text-green-400">
              <Link href="/Blog" className="font-medium">
                Blog
              </Link>
            </li>
            <li className="active:text-green-400 hover:text-green-400">
              <Link href="/Merch" className="font-medium ">
                Merch
              </Link>
            </li>
            <li className="text-green-400 border-solid border py-2 px-4 -mt-2 rounded-lg border-green-400">
              <Link href="/Member" className="font-medium text-base ">
                Join us
              </Link>
            </li>
          </ul>
          <button onClick={() => {
            setHiddenNav(!hiddenNav)
          }} className={`md:hidden flex w-6 flex-col-reverse rotate-180 mt-2 h-5 justify-between  `}>
            <div className={`border-black border rounded-md w-4 transition-all duration-200 ${hiddenNav ? 'rotate-45 translate-x-1.5 -translate-y-2.5 ease-in-out' : ''}`}></div>
            <div className={`border-black border rounded-md w-6 duration-200 ${hiddenNav ? 'hidden ' : ''}`}></div>
            <div className={`border-black border rounded-md w-4 transition-all duration-200 ${hiddenNav ? '-rotate-45  translate-y-2 translate-x-1.5 ease-out ' : ''} `}></div>
          </button>
        </nav>
        <nav className={`md:hidden rounded-xl ${hiddenNav ? 'bg-white' : 'hidden'}  z-50 left-4 top-20 absolute h-72  w-11/12 flex `}>
          <ul className={`${hiddenNav ? 'flex' : 'hidden'}  flex-col z-50 justify-evenly h-full  w-full items-center`}>
            <li className=" font-medium active:text-green-400 hover:text-green-400 text-lg"><Link href='/About' onClick={() => setHiddenNav(!hiddenNav)}>About</Link></li>
            <li className="font-medium active:text-green-400 hover:text-green-400 text-lg"><Link href='/Blog' onClick={() => setHiddenNav(!hiddenNav)}>Blog</Link></li>
            <li className="font-medium active:text-green-400 hover:text-green-400 text-lg"><Link href='/Merch' onClick={() => setHiddenNav(!hiddenNav)}>Merch</Link></li>
            <li className="font-medium active:text-green-400 py-2 px-4 text-green-400 border-green-400 border rounded-lg border-solid hover:text-green-400 text-lg"><Link href='/Contact' onClick={() => setHiddenNav(!hiddenNav)}>Join us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
