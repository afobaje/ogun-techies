import Link from 'next/link'
import React from 'react'

export default function Modal() {
  return (
    <section className='absolute p-10 flex flex-col top-[10%] right-[20%] items-center w-[40vw] h-[40vh] bg-slate-200'>
      <h2 className='font-bold text-xl mb-3  text-[#101750]'>Your order is successful! </h2>
      <p>Thank you for your order! Your order is being processed and will be completed within 3-6
        hours. You will receive an email confirmation when your order is completed.</p>
        <Link href='Merch' className='py-3 px-6 bg-green-300 mt-4'>Continue Shopping</Link>
      {/* <button className='py-3 px-6 bg-green-300 mt-4'>Continue Shopping</button> */}
    </section>
  )
}
