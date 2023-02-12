import Link from 'next/link'
import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion'


export default function Modal({ display }: any) {

  return (
    <>
    
      <section className={` w-full bg-gray-800 h-full block md:p-10  bg-opacity-40 inset-0 ${display ? 'fixed' : 'hidden'} `}>
        <div className='flex top-[30%] md:top-[28%] rounded-xl opacity-100 p-6 md:p-12 w-[75vw]  md:w-[40vw] md:px-16 items-center bg-white absolute right-[15%]  md:right-[30%] flex-col '>
          <h2 className='font-bold text-xl mb-3  text-[#101750]'>Your order is successful! </h2>
          <p>Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.</p>
            {
        display && <ConfettiExplosion
        duration={3000}
        force={0.8}
         />
      }
          <Link href='/Merch' className='py-3 px-6 rounded-lg text-[#101750] bg-green-300 mt-4'>Continue Shopping</Link>
        </div>
      </section>
    </>
  )
}
