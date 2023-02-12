import Image from 'next/image'
import React, { useContext, useState } from 'react'
import NewsItem from '../Components/NewsItem'
import Banner from './../public/assets/Blogbanner.png'
import { storeVault } from '../Components/storeContext'


export default function Blog({data}:any){
  
const {news}=useContext(storeVault)

let [displayFormat,setDisplayFormat]=useState(false)


  return (
    <div className='flex flex-col '>
      <section className="banner relative">
        <h1 className="text-3xl top-16  md:top-32  z-10 right-1/2  text-white md:right-2/4 font-bold absolute">
          Blog
        </h1>
        <Image src={Banner} className='-z-10' alt='blog banner' />
      </section>
      <section className="flex px-10 flex-col relative">
        <div className="displayFormat absolute">
          <button onClick={()=>setDisplayFormat(false)}>Row</button>
          <button onClick={()=>setDisplayFormat(true)}>Column</button>
        </div>
        <h2 className='text-center font-bold text-xl py-10'>Latest news</h2>
        <div className={` ${displayFormat?'flex transition-all duration-300 flex-col':'grid  duration-300 transition-all  sm:grid-cols-2 gap-5 py-4 md:grid-cols-3 '}`}>
          {news?.map(({img,title,content}:any, i:any) => <NewsItem key={i} id={content} Img={img} title={title} />)}
        </div>
        <div className="grid  sm:grid-cols-2 gap-5 py-4 md:grid-cols-3 ">
          {data.map((
            {slug,id,_embedded,title:{rendered}}:any,i:any)=><NewsItem key={i} id={slug}  title={rendered} />)}
        </div>
        <div className="flex flex-col my-10 items-center"><button className='border border-solid border-slate-400 rounded-lg p-4'>Load more posts</button></div>
      </section>
    </div>
  )
}


export async function getStaticProps() {
  const res=await fetch(`http://localhost/mysite/wp-json/wp/v2/posts?_embed`)
  const data=await res.json()
  return { props: { data } }
}