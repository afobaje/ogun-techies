import Image from 'next/image'
import React, { useState } from 'react'
import NewsItem from '../Components/NewsItem'
import mugs from './../public/assets/mugs.png'
import Banner from './../public/assets/Blogbanner.png'

export default function Blog() {
  const [news] = useState([{
    img:mugs,
    title:'this is my way of saying hello jelo'
  },
  {
    img:mugs,
    title:'this is my way of saying hello jelo'
  },
  {
    img:mugs,
    title:'this is my way of saying hello jelo'
  },
  {
    img:mugs,
    title:'this is my way of saying hello jelo'
  },
  {
    img:mugs,
    title:'this is my way of saying hello jelo'
  }
])

console.log('whats here',useState())
  return (
    <div className='flex flex-col '>
      <section className="banner relative">
        <h1 className="text-3xl top-16  md:top-32  z-10 right-1/2  text-white md:right-2/4 font-bold absolute">
          Blog
        </h1>
        <Image src={Banner} className='-z-10' alt='blog banner' />
      </section>
      <section className="flex px-10 flex-col">
        <h2 className='text-center font-bold text-xl py-10'>Latest news</h2>
        <div className="grid  sm:grid-cols-2 gap-5 py-4 md:grid-cols-3 ">
          {news?.map(({img,title}, i) => <NewsItem key={i} Img={img} title={title} />)}
        </div>
        <div className="flex flex-col my-10 items-center"><button className='border border-solid border-slate-400 rounded-lg p-4'>Load more posts</button></div>
      </section>
    </div>
  )
}
