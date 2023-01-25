import Image from "next/image";
import React from "react";
import Desktop from "./../public/assets/Desktop-meet.png";
import Mobile from "./../public/assets/Mobile-meet.png";
import BG from "./../public/assets/BG.png";
import IMAGE1 from "./../public/assets/IMAGE1.png";
import banner from "./../public/assets/inatimi-nathus-UygW_kIv2A4-unsplash 1.png";
import rec from "./../public/assets/Rectangle 3808.png";
import Clock from './../public/assets/Clock.png'
import CommonPerson from './../public/assets/CommonPerson.png'
import arc from './../public/assets/Unionarc.svg'
import smallarc from './../public/assets/Unionsmall.svg'
import Link from "next/link";


export default function Home() {

  return (
    <div className="flex  flex-col ">
      <section className="mb-10 w-full">
        <div className="intro  sm:max-w-[640px] flex flex-col lg:h-[100vh] bg-[rgba(94,205,129,0.1)] my-auto lg:flex-row-reverse justify-center   rounded-xl px-6 py-3 mx-auto md:max-w-7xl">
          <picture className="m-auto lg:justify-self-end lg:mr-0 lg:h-4/5 px-4  lg:flex lg:justify-end lg:flex-col lg:items-end relative">
            <Image src={smallarc} alt='small arc' className="-left-0  hidden -top-2 md:block lg:hidden   absolute " />
            <Image src={arc} alt='arc' className="absolute object-cover lg:block hidden object-center lg:-top-7 lg:-left-5 " />
            <source media="(max-width: 1023px)" srcSet={Mobile.src} />
            <Image src={Desktop} alt='office gathering' className="object-cover md:w-full md:h-full object-center" />
          </picture>
          <div className="flex flex-col  justify-between md:justify-center md:px-10 md:py-4 px-10 py-12">
            <div className="w-full flex flex-col lg:justify-center justify-evenly md:h-full md:w-full ">

              <h1 className="lg:py-8 font-bold text-center sm:text-4xl sm:mx-0  mx-auto lg:text-5xl md:text-center lg:text-start text-2xl mt-4 lg:leading-tight md:text-4xl  mb-4 leading-snug md:leading-normal px-4 ">The Home of <br className="md:hidden lg:inline" /> Ogun's Tech <br /> Enthusiasts</h1>
              <p className="text-lg lg:py-3 sm:text-center mx-auto  lg:text-xl font-medium text-center lg:text-justify lg:mx-auto ">Rebuilding Ogun state through <br /> technology</p>
              <div className="buttongroup lg:py-3 sm:flex-col mx-auto  md:flex-row flex-col flex">
                <Link href='/Member' className="py-4 px-6 sm:p-4  md:p-2  text-white sm:mr-2 bg-green-400 border border-green-400 border-solid mt-4 rounded-lg">Become a member</Link>
                {/* <button className="py-4 px-6 sm:p-4  md:p-2  text-white sm:mr-2 bg-green-400 border border-green-400 border-solid mt-4 rounded-lg">Become a member</button> */}
                <button className="py-4 px-6 sm:p-4 md:p-2  text-green-400 border border-green-400 border-solid mt-4  rounded-lg">Invite others</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 md:flex-col  md:flex bg-[#C2FCD4]">
        <div className="flex lg:flex-row flex-col md:justify-center justify-between w-full p-10">
          <div className="lg:w-1/2 py-24  md:px-14">
            <h4 className="mb-12  font-semibold">KNOW ABOUT US</h4>
            <h2 className="text-3xl font-bold md:pr-20 ">
              Beginner, intermediate  or pro? You are welcome  here
            </h2>
            <p className="py-10 md:pr-16 leading-relaxed">
              OgunTechies is a community of young, vibrant individuals residing
              in Ogun State, looking to connect with like-minded individuals.
              Together we are building a great place to network, share ideas and
              help each other grow.
            </p>
            <button className="bg-green-400 text-white px-4 py-2 rounded-xl">
              Read more
            </button>
          </div>
          <div className="lg:w-1/2 md:w-full md:flex md:justify-center md:flex-col md:h-full">
            <picture className="md:m-auto">
              <Image src={BG} alt="community" className=" object-center object-cover" />
            </picture>
          </div>
        </div>
      </section>
      <section className="events">
        <div className="flex flex-col py-14 px-8">
          <h2 className="mb-14 text-2xl font-bold pl-16">Our Events</h2>
          <div className="card-wrapper md:px-16 flex flex-col">
            <div className="card py-6 flex flex-col md:justify-center lg:flex-row">
              <Image alt="for gatherings" className="object-cover object-center w-full" src={IMAGE1} />
              <div className="px-6 flex-2  py-4 bg-[rgba(94,205,129,0.1)]">
                <h2>GATHERING OF INTELLECTUALS</h2>
                <div className="text-green-300">29th july 2022</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  natus quam quas cumque, quis nam, dolore esse vel nihil illo
                  iure est soluta similique magnam nulla beatae veniam laborum
                  culpa.
                </div>
                <button>READ MORE</button>
              </div>
            </div>
            <div className="card py-6 flex flex-col md:justify-center lg:flex-row">
              <Image alt="for gatherings" className="object-cover object-center w-full" src={IMAGE1} />
              <div className="px-6 flex-2  py-4 bg-[rgba(94,205,129,0.1)]">
                <h2>GATHERING OF INTELLECTUALS</h2>
                <div className="text-green-300">29th july 2022</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  natus quam quas cumque, quis nam, dolore esse vel nihil illo
                  iure est soluta similique magnam nulla beatae veniam laborum
                  culpa.
                </div>
                <button>READ MORE</button>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-white py-2 px-4 rounded-lg bg-green-400">
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="news flex flex-col lg:min-h-[90vh] px-10 bg-[#c2fcd4]">
        <h2 className="md:pl-20 mx-auto text-2xl font-semibold pt-4 mb-8">
          Read our news
        </h2>
        <div className="news-wrapper items-center  flex lg:flex-row flex-col justify-evenly">
          <div className="news-card bg-white mb-10 lg:mb-0 lg:w-1/4 h-fit flex rounded-lg flex-col py-4 px-3">
            <Image alt="rec" className="mb-6 object-cover w-full" src={rec} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, quod?
            </p>
          </div>
          <div className="news-card lg:w-1/4 flex mb-10 lg:mb-0 flex-col py-4 h-fit px-3 rounded-lg bg-white ">
            <Image alt="rec" className="mb-6 object-cover w-full" src={Clock} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, quod?
            </p>
          </div>
          <div className="news-card lg:w-1/4 flex mb-10 lg:mb-0 flex-col py-4 h-fit px-3 rounded-lg bg-white ">
            <Image alt="rec" className="mb-6 object-cover w-full" src={CommonPerson} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, quod?
            </p>
          </div>
        </div>
      </section>
      <section className="banner h-[50vh]  md:h-[55vh]  lg:h-[60vh] md:max-w-full lg:mb-10 lg:mt-20  mt-10 flex justify-center items-center">
        <div className="banner-wrapper md:h-4/6  h-4/6 lg:h-full flex justify-evenly w-11/12 m-auto bg-yellow-400 rounded-3xl ">
          <div className="w-1/2 flex justify-center items-center md:items-start flex-col">
            <div className="md:ml-24">
              <h2 className="text-white md:font-semibold leading-tight mb-6 text-2xl md:text-4xl">
                You're in for a <br className="hidden md:inline" /> treat!
              </h2>
              <button className="font-semibold text-xl py-3 text-yellow-400 px-4 md:px-12 bg-white rounded-xl">
                Join us
              </button>
            </div>
          </div>
          <div className="hidden md:block md:-mt-10 lg:-mt-20  -mt-24 -mr-10 banner-image w-1/2">
            <Image src={banner} alt="banner" className="object-cover object-center" />
          </div>
        </div>
      </section>
    </div>
  );
}
