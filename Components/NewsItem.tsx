import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function NewsItem({Img,title,id}:any) {

  return (
    <Link href={`/Blog/${id}`} className='flex items-center shadow-sm flex-col p-6 shadow-slate-300'>
        <Image src={Img}   alt='news thumbnail image' />
        <div className='p-4  font-medium text-base'>{title}</div>
    </Link>
  )
}


