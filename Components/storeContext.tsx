import React, { createContext, useState } from 'react'
import shirt1 from "./../public/assets/shirt1.png";
import shirt2 from "./../public/assets/shirt2.png";
import shirt3 from "./../public/assets/shirt3.png";
import shirt4 from "./../public/assets/shirt4.png";
import shirt5 from "./../public/assets/shirt5.png";
import shirt6 from "./../public/assets/shirt6.png";
import shirt7 from "./../public/assets/shirt7.png";
import shirt8 from "./../public/assets/shirt8.png";
import stickers from "./../public/assets/stickers.png";
import mug from "./../public/assets/mugs.png";
import lapels from "./../public/assets/lapels.png";
import bottles from "./../public/assets/bottles.png";
import { item } from '../Interface/Store.types';



export const storeVault=createContext<any>('')
export default function StoreContext({children}:any) {
  let [total,setTotal]=useState(0)
  let [cart,setCart]=useState([])
     let [store] = useState<item[]>([
        {
          id:1,
          shirt: shirt1,
          price: 2500,
          ProductName: "Hoodie",
        },
        {
          id:2,
          shirt: shirt2,
          price: 2500,
          ProductName: "Hoodie",
        },
        {
          id:3,
          shirt: shirt3,
          price: 2500,
          ProductName: "Hoodie",
        },
        {
          id:4,
          shirt: shirt4,
          price: 2500,
          ProductName: "Hoodie",
        },
        {
          id:5,
          shirt: shirt5,
          price: 2500,
          ProductName: "T-shirt",
        },
        {
          id:6,
          shirt: shirt6,
          price: 2500,
          ProductName: "T-shirt",
        },
        {
          id:7,
          shirt: shirt7,
          price: 2500,
          ProductName: "Hoodie",
        },
        {
          id:8,
          shirt: shirt8,
          price: 2500,
          ProductName: "T-shirt",
        },
        {
          id:9,
          shirt: stickers,
          price: 2500,
          ProductName: "Laptop stickers",
        },
        {
          id:10,
          shirt: mug,
          price: 2500,
          ProductName: "Mug",
        },
        {
          id:11,
          shirt: lapels,
          price: 2500,
          ProductName: "Pin button",
        },
        {
          id:12,
          shirt: bottles,
          price: 2500,
          ProductName: "Water bottle",
        },
      ]);

      const [news] = useState([
        {
        content:1,
        img:mug,
        title:'this is my way of saying hello jelo'
      },
      {
        content:2,
        img:mug,
        title:'this is my way of saying hello jelo'
      },
      {
        content:3,
        img:mug,
        title:'this is my way of saying hello jelo'
      },
      {
        content:4,
        img:mug,
        title:'this is my way of saying hello jelo'
      },
      {
        content:5,
        img:mug,
        title:'this is my way of saying hello jelo'
      }
    ])
  return (
    <storeVault.Provider value={{store,cart,news,setCart,total,setTotal}}>
        {children}
    </storeVault.Provider>
  )
}
