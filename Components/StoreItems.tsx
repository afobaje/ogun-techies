import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StoreItems({img,productName,productPrice,id}:any) {
  return (
    <Link href={`/${id}`} className='flex flex-col p-3 w-fit md:p-6 justify-center md:justify-evenly  hover:shadow-sm hover:rounded-lg hover:shadow-slate-400 items-center md:items-start '>
        <Image src={img} alt='products'/>
        <p className='mt-5 ml-4 text-lg font-medium'>{productName}</p>
        <p className='mt-5 ml-4 font-medium text-lg'>₦{new Intl.NumberFormat().format(productPrice||0)}</p>
    </Link>
  )
}
