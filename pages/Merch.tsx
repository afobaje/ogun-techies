import React, { useContext, useState } from "react";
import Image from "next/image";
import StoreItems from "../Components/StoreItems";
import Merchbanner from "./../public/assets/merch-banner.png";
import { storeVault } from "../Components/storeContext";
import { item } from "../Interface/Store.types";
import Link from "next/link";

export default function Merch() {
  let { store, cart } = useContext(storeVault);

  let length = cart.length
  let [showCart] = useState(() => {
    if (length > 0) {
      return true
    } else {
      return false
    }
  })


  return (
    <div className="">
      <section className="banner">
        <Image src={Merchbanner} alt="banner" />
      </section>
      <section className="items relative grid grid-cols-2 place-content-center md:grid-cols-3 gap-2 my-20 w-11/12 mx-auto">
        <Link href='/Cart' className={` absolute  md:-top-8 -top-14 -right-3  md:-right-20 ${showCart ? '' : 'hidden'} `}><span className="absolute text-sm right-0 -top-2 bg-red-400 text-center text-white w-5 h-5 rounded-full  ">{length}</span><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="46" height="46" rx="23" fill="#FFDA1F" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 16.8125C14 16.5018 14.2518 16.25 14.5625 16.25H16.25C16.5081 16.25 16.7331 16.4257 16.7957 16.6761L17.2517 18.5H30.3125C30.4857 18.5 30.6493 18.5798 30.7559 18.7163C30.8625 18.8529 30.9002 19.0309 30.8582 19.1989L29.1707 25.9489C29.1081 26.1993 28.8831 26.375 28.625 26.375H18.5C18.2419 26.375 18.0169 26.1993 17.9543 25.9489L15.8108 17.375H14.5625C14.2518 17.375 14 17.1232 14 16.8125ZM17.5329 19.625L18.9392 25.25H28.1858L29.5921 19.625H17.5329ZM19.625 28.625C19.0037 28.625 18.5 29.1287 18.5 29.75C18.5 30.3713 19.0037 30.875 19.625 30.875C20.2463 30.875 20.75 30.3713 20.75 29.75C20.75 29.1287 20.2463 28.625 19.625 28.625ZM17.375 29.75C17.375 28.5074 18.3824 27.5 19.625 27.5C20.8676 27.5 21.875 28.5074 21.875 29.75C21.875 30.9926 20.8676 32 19.625 32C18.3824 32 17.375 30.9926 17.375 29.75ZM27.5 28.625C26.8787 28.625 26.375 29.1287 26.375 29.75C26.375 30.3713 26.8787 30.875 27.5 30.875C28.1213 30.875 28.625 30.3713 28.625 29.75C28.625 29.1287 28.1213 28.625 27.5 28.625ZM25.25 29.75C25.25 28.5074 26.2574 27.5 27.5 27.5C28.7426 27.5 29.75 28.5074 29.75 29.75C29.75 30.9926 28.7426 32 27.5 32C26.2574 32 25.25 30.9926 25.25 29.75Z" fill="black" />
        </svg>
        </Link>
        {store.map(({ shirt, price, ProductName, id }: item, i: any) => (
          <StoreItems
            key={i}
            img={shirt}
            productName={ProductName}
            productPrice={price}
            id={id}
          />
        ))}
      </section>
    </div>
  );
}
