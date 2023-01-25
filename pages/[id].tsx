import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { storeVault } from "../Components/storeContext";
import banner from "./../public/assets/roundedbanner.png";


export default function id() {
  const router = useRouter();
  let { id } = router.query;
  let storeValues = useContext(storeVault)
  let [item] = storeValues.store.filter((val: any) => val.id == id);
  let { cart, setCart } = storeValues;
  let [count, setCount] = useState(() => {
    let itemInCart = getItem()
    if (itemInCart) {
      return itemInCart.qty
    } else {
      return 1
    }
  });
  let [disabled, setDisabled] = useState(false)

  function getItem(): any {
    for (const val of cart) {
      if (val.id == item.id) {
        return val
      }
    }
    return;
  };


  function AddToCart() {
    let pickedItem = getItem()
    if (pickedItem) {
      let newItem = cart.map((val: any) => {
        if (val.id == pickedItem.id) {
          return {
            ...val,
            qty: count
          }
        } else {
          return val;
        }
      });
      setCart(newItem)
    } else {
      setCart([...cart, { ...item, qty: count }])
    }
  }


  let addHandler = () => {
    setDisabled(false)
    setCount((prev: any) => prev + 1)
  }

  let length = cart.length;


  let subHandler = () => {
    if (count < 2) {
      setDisabled(true)
    } else {
      setCount((prev: any) => prev - 1)
    }
  }



  return (
    <section className="max-w-[900px] md:max-w-full md:flex-row gap-4  my-4 p-10 flex-col items-center relative  mx-auto flex ">
      <Link href='/Cart' className="absolute -top-4  right-10"><span className="absolute text-sm right-0 -top-2 bg-red-400 text-center text-white w-6 h-6 rounded-full  ">{length}</span><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="23" fill="#FFDA1F" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 16.8125C14 16.5018 14.2518 16.25 14.5625 16.25H16.25C16.5081 16.25 16.7331 16.4257 16.7957 16.6761L17.2517 18.5H30.3125C30.4857 18.5 30.6493 18.5798 30.7559 18.7163C30.8625 18.8529 30.9002 19.0309 30.8582 19.1989L29.1707 25.9489C29.1081 26.1993 28.8831 26.375 28.625 26.375H18.5C18.2419 26.375 18.0169 26.1993 17.9543 25.9489L15.8108 17.375H14.5625C14.2518 17.375 14 17.1232 14 16.8125ZM17.5329 19.625L18.9392 25.25H28.1858L29.5921 19.625H17.5329ZM19.625 28.625C19.0037 28.625 18.5 29.1287 18.5 29.75C18.5 30.3713 19.0037 30.875 19.625 30.875C20.2463 30.875 20.75 30.3713 20.75 29.75C20.75 29.1287 20.2463 28.625 19.625 28.625ZM17.375 29.75C17.375 28.5074 18.3824 27.5 19.625 27.5C20.8676 27.5 21.875 28.5074 21.875 29.75C21.875 30.9926 20.8676 32 19.625 32C18.3824 32 17.375 30.9926 17.375 29.75ZM27.5 28.625C26.8787 28.625 26.375 29.1287 26.375 29.75C26.375 30.3713 26.8787 30.875 27.5 30.875C28.1213 30.875 28.625 30.3713 28.625 29.75C28.625 29.1287 28.1213 28.625 27.5 28.625ZM25.25 29.75C25.25 28.5074 26.2574 27.5 27.5 27.5C28.7426 27.5 29.75 28.5074 29.75 29.75C29.75 30.9926 28.7426 32 27.5 32C26.2574 32 25.25 30.9926 25.25 29.75Z" fill="black" />
      </svg>
      </Link>
      <div className="w-1/5 hidden md:flex flex-col">
        <Image src={banner} alt="banner" />
        <div className="mt-6">
          <ul className="flex flex-col">
            <li className="py-4 px-2  ">Merch list </li>
            <li className="py-4 px-2  ">Hoodies</li>
            <li className="py-4 px-2  ">T-shirts</li>
            <li className="py-4 px-2  ">Laptop stickers</li>
            <li className="py-4 px-2  ">Mugs</li>
            <li className="py-4 px-2  ">Water bottles</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex md:flex-row md:justify-center ms:items-center md:w-4/5 flex-col ">
        <div className="flex items-center md:items-start justify-center">
          <Image alt='item image' className="object-cover w-full object-center md:h-4/6 rounded-xl" src={item?.shirt} />
        </div>
        <div className='details flex flex-col md:w-4/6 md:ml-10 md:mx-0   mx-auto'>
          <div className="name justify-between py-5 flex">
            <div className="flex flex-col justify-between ">
              <p className="pb-2 font-semibold text-lg">{item?.ProductName}</p>
              <p className="pb-2 font-semibold text-base ">₦ {item?.price}</p>
            </div>
            <div className="">share</div>
          </div>
          <div className="color py-5">
            <p>Color</p>
            <div className="flex justify-between items-center w-3/5 md:w-1/5 mt-4">
              <button className="bg-yellow-400 w-5 h-5 rounded-full"></button>
              <button className="bg-green-400 w-5 h-5 rounded-full"></button>
              <button className="bg-blue-400 w-5 h-5 rounded-full"></button>
            </div>
          </div>
          <div className="py-5">
            <p>Size</p>
            <div className="flex justify-between mt-4 w-full md:w-2/5  ">
              <button className="border border-solid border-black hover:border-green-400 hover:text-green-400 rounded-xl p-4 mr-3 md:mr-0  ">
                XS
              </button>
              <button className="border border-solid border-black hover:border-green-400 hover:text-green-400 rounded-xl p-4 mr-3 md:mr-0  ">
                S
              </button>
              <button className="border border-solid border-black hover:border-green-400 hover:text-green-400 rounded-xl p-4 mr-3 md:mr-0  ">
                M
              </button>
              <button className="border border-solid border-black hover:border-green-400 hover:text-green-400 rounded-xl p-4 mr-3 md:mr-0 ">
                L
              </button>
            </div>
          </div>
          <div>
            <p>Quantity</p>
            <div className="flex items-center justify-evenly border-green-400 rounded-lg border py-4 border-solid md:w-2/5  w-3/5 mt-4">
              <button onClick={subHandler} disabled={disabled} className="text-green-400 ">
                -
              </button>
              <span className=" text-green-400">{count}</span>
              <button onClick={addHandler} className="text-green-400 ">
                +
              </button>
            </div>
          </div>
          <div className="buy py-5">
            <button onClick={AddToCart} className="py-4 w-full bg-green-400 rounded-lg text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
