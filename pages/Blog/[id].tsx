import React, { useEffect, useRef, useState } from 'react'

export default function Content({ post }: any) {
  let [item] = post
  let article = useRef<HTMLDivElement>(null);
  let wpm = 255;
  let [readtime, setReadTime] = useState(0);

  useEffect(() => {
    if (article.current) {
      let articleText = article.current?.innerText;
      const words = articleText?.trim().split(/\s+/).length;
      setReadTime(Math.ceil(words / wpm))
    }
  }, [readtime,wpm])

  
  function createMarkup() {
    return { __html: item.content.rendered }
  }

  return (
    <section className='max-w-[900px] mx-auto'>
      <div className='flex flex-col'>
        <div className="newsbanner w-full">
        </div>
        <div className="newsbody w-10/12 m-auto my-10 flex flex-col">
          <h2 className='mt-10 font-semibold text-2xl'>{item.title.rendered}</h2>
          <div className="details mt-10 flex justify-between">
            <div className='author flex items-center'><span className='mr-2'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.12632 0.585749C8.10579 0.585749 8.0864 0.590881 8.06701 0.590881C8.00656 0.589171 7.94668 0.585178 7.88565 0.585749H8.12632ZM8.03279 9.86695C8.02196 9.86695 8.01226 9.86524 8.00143 9.86524C7.99344 9.86524 7.98603 9.86695 7.97804 9.86695H8.03279ZM4.6406 6.45194C4.64915 6.45023 4.65543 6.4411 4.66455 6.43882C5.20121 8.38072 6.59048 9.83387 8.002 9.86467C9.28747 9.80535 10.8661 8.37844 11.3919 6.44624C11.6337 6.46107 11.8755 6.17591 11.9434 5.77898C12.0135 5.36493 11.8664 4.99537 11.6172 4.9526C11.6012 4.94975 11.5847 4.96001 11.5693 4.96058C11.4968 1.76515 9.97869 0.638217 8.06701 0.589741C6.09546 0.599436 4.33035 1.96932 4.44213 4.96172C4.42331 4.96172 4.40563 4.94975 4.38738 4.95317C4.13702 4.99594 3.99102 5.3655 4.06117 5.77955C4.1296 6.19245 4.38966 6.49357 4.6406 6.45194ZM10.6579 10.4196L8.86658 13.9247L8.58371 11.6452L9.0257 11.2825H7.95466H6.97544L7.418 11.6452L7.13456 13.9247L5.3455 10.4196C2.2339 10.8388 0 12.1721 0 15.4138H16C16.0011 12.1716 13.7678 10.8393 10.6579 10.4196Z" fill="#888888" />
              </svg></span><p>author</p></div>
            <div className="date flex items-center">
              <span className='mr-2'><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.14286 1V2H9.25714V1C9.25714 0.447812 9.71679 0 10.2857 0C10.8546 0 11.3143 0.447812 11.3143 1V2H12.8571C13.7089 2 14.4 2.67156 14.4 3.5V5H0V3.5C0 2.67156 0.69075 2 1.54286 2H3.08571V1C3.08571 0.447812 3.54536 0 4.11429 0C4.68321 0 5.14286 0.447812 5.14286 1ZM0 6H14.4V14.5C14.4 15.3281 13.7089 16 12.8571 16H1.54286C0.69075 16 0 15.3281 0 14.5V6ZM2.05714 9.5C2.05714 9.775 2.28729 10 2.57143 10H3.6C3.88286 10 4.11429 9.775 4.11429 9.5V8.5C4.11429 8.225 3.88286 8 3.6 8H2.57143C2.28729 8 2.05714 8.225 2.05714 8.5V9.5ZM6.17143 9.5C6.17143 9.775 6.40286 10 6.68571 10H7.71429C7.99714 10 8.22857 9.775 8.22857 9.5V8.5C8.22857 8.225 7.99714 8 7.71429 8H6.68571C6.40286 8 6.17143 8.225 6.17143 8.5V9.5ZM10.8 8C10.5171 8 10.2857 8.225 10.2857 8.5V9.5C10.2857 9.775 10.5171 10 10.8 10H11.8286C12.1114 10 12.3429 9.775 12.3429 9.5V8.5C12.3429 8.225 12.1114 8 11.8286 8H10.8ZM2.05714 13.5C2.05714 13.775 2.28729 14 2.57143 14H3.6C3.88286 14 4.11429 13.775 4.11429 13.5V12.5C4.11429 12.225 3.88286 12 3.6 12H2.57143C2.28729 12 2.05714 12.225 2.05714 12.5V13.5ZM6.68571 12C6.40286 12 6.17143 12.225 6.17143 12.5V13.5C6.17143 13.775 6.40286 14 6.68571 14H7.71429C7.99714 14 8.22857 13.775 8.22857 13.5V12.5C8.22857 12.225 7.99714 12 7.71429 12H6.68571ZM10.2857 13.5C10.2857 13.775 10.5171 14 10.8 14H11.8286C12.1114 14 12.3429 13.775 12.3429 13.5V12.5C12.3429 12.225 12.1114 12 11.8286 12H10.8C10.5171 12 10.2857 12.225 10.2857 12.5V13.5Z" fill="#888888" />
              </svg></span><p>{new Date(item.date).toDateString()}</p>
            </div>
            <div className="read flex items-center">
              <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_742_11222)">
                  <path d="M10.8511 9.41292L8.62024 7.73979V4.3316C8.62024 3.98891 8.34323 3.71191 8.00055 3.71191C7.65786 3.71191 7.38086 3.98891 7.38086 4.3316V8.04967C7.38086 8.24485 7.47258 8.42892 7.62873 8.54541L10.1074 10.4044C10.219 10.4881 10.3491 10.5284 10.4786 10.5284C10.6676 10.5284 10.8535 10.4435 10.975 10.2799C11.1808 10.0066 11.125 9.61804 10.8511 9.41292Z" fill="#888888" />
                  <path d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z" fill="#888888" />
                </g>
                <defs>
                  <clipPath id="clip0_742_11222">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg></span>
              <p> {readtime} min read</p>
            </div>
          </div>
          <div ref={article} className="newscontent my-10 text-start m-auto leading-8" dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <div className="categories flex w-8/12 m-auto flex-col">
          <h2 className=' pb-4 mb-2 border-black  border-solid  border-b-2'>Category</h2>
          <div className="flex  flex-col">
            <div className="flex justify-between mb-4">
              <p>Education</p>
              <p>(3)</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Food</p>
              <p>(2)</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Medical</p>
              <p>(4)</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Home</p>
              <p>(5)</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Water</p>
              <p>(4)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



export async function getStaticPaths() {
  const res=await fetch(`https://blog.oguntechies.com/wp-json/wp/v2/posts?_embed`)
  const content = await res.json()
  const path = content.map((val: any) => ({
    params: { id: val.slug }
  }))
  return { paths: path, fallback: false }

}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://blog.oguntechies.com/wp-json/wp/v2/posts?slug=${params.id}`)
  const post = await res.json()
  return { props: { post } }
}