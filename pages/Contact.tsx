import Image from "next/image";
import React from "react";
import Banner from "./../public/assets/Blogbanner.png";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="banner relative">
        <h1 className="md:text-3xl top-10 right-2/4  left-auto md:top-32 text-white md:right-2/4 font-bold absolute">
          Contact us
        </h1>
        <Image src={Banner} alt="blog banner" />
      </section>
      <section className="contact block  mt-20">
        <div className="contact-wrapper flex-col lg:flex-row m-auto flex justify-evenly">
          <div className="call-card flex flex-col p-10 h-64 w-3/4 mx-auto my-3 lg:w-1/4 bg-green-200 rounded-xl  justify-evenly items-center ">
            <div className="callLogo">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  fill="white"
                  stroke="#5ECD81"
                  strokeWidth="4"
                />
                <g clipPath="url(#clip0_123_1928)">
                  <path
                    d="M41.6667 33.3333C42.9927 33.3333 44.2645 33.8601 45.2022 34.7978C46.1399 35.7355 46.6667 37.0073 46.6667 38.3333C46.6667 38.7754 46.8423 39.1993 47.1548 39.5118C47.4674 39.8244 47.8913 40 48.3333 40C48.7754 40 49.1993 39.8244 49.5118 39.5118C49.8244 39.1993 50 38.7754 50 38.3333C50 36.1232 49.122 34.0036 47.5592 32.4408C45.9964 30.878 43.8768 30 41.6667 30C41.2246 30 40.8007 30.1756 40.4882 30.4882C40.1756 30.8007 40 31.2246 40 31.6667C40 32.1087 40.1756 32.5326 40.4882 32.8452C40.8007 33.1577 41.2246 33.3333 41.6667 33.3333Z"
                    fill="#5ECD81"
                  />
                  <path
                    d="M41.6673 26.6666C44.7615 26.6666 47.729 27.8957 49.9169 30.0837C52.1048 32.2716 53.334 35.2391 53.334 38.3333C53.334 38.7753 53.5096 39.1992 53.8221 39.5118C54.1347 39.8243 54.5586 39.9999 55.0007 39.9999C55.4427 39.9999 55.8666 39.8243 56.1792 39.5118C56.4917 39.1992 56.6673 38.7753 56.6673 38.3333C56.6673 34.355 55.087 30.5397 52.2739 27.7266C49.4609 24.9136 45.6456 23.3333 41.6673 23.3333C41.2253 23.3333 40.8014 23.5088 40.4888 23.8214C40.1762 24.134 40.0007 24.5579 40.0007 24.9999C40.0007 25.4419 40.1762 25.8659 40.4888 26.1784C40.8014 26.491 41.2253 26.6666 41.6673 26.6666ZM56.2506 46.5166C56.159 46.249 56.0007 46.0092 55.7908 45.8197C55.5809 45.6302 55.3262 45.4972 55.0507 45.4333L45.0506 43.1499C44.7792 43.0884 44.4967 43.0958 44.2288 43.1715C43.961 43.2472 43.7164 43.3887 43.5173 43.5833C43.284 43.7999 43.2673 43.8166 42.184 45.8833C38.5893 44.2268 35.709 41.3347 34.0673 37.7333C36.184 36.6666 36.2007 36.6666 36.4173 36.4166C36.6118 36.2175 36.7534 35.9729 36.8291 35.7051C36.9048 35.4372 36.9122 35.1547 36.8506 34.8833L34.5673 24.9999C34.5034 24.7244 34.3704 24.4697 34.1809 24.2598C33.9914 24.0498 33.7515 23.8916 33.484 23.7999C33.0948 23.6609 32.6928 23.5604 32.284 23.4999C31.8627 23.4022 31.4329 23.3464 31.0007 23.3333C28.9673 23.3333 27.0173 24.141 25.5795 25.5788C24.1417 27.0165 23.334 28.9666 23.334 30.9999C23.3428 37.8044 26.0498 44.3277 30.8613 49.1392C35.6728 53.9508 42.1961 56.6578 49.0007 56.6666C50.0075 56.6666 51.0044 56.4683 51.9346 56.083C52.8647 55.6977 53.7099 55.133 54.4218 54.4211C55.1337 53.7092 55.6984 52.864 56.0837 51.9338C56.469 51.0037 56.6673 50.0067 56.6673 48.9999C56.6678 48.5757 56.6344 48.1521 56.5673 47.7332C56.4973 47.3193 56.3913 46.9122 56.2506 46.5166Z"
                    fill="#5ECD81"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_123_1928">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(20 20)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-semibold text-xl">Call us</p>
            <p className="text-lg">+234-8112345678</p>
          </div>
          <div className="call-card flex flex-col p-10 h-64 w-3/4 mx-auto my-3 lg:w-1/4 bg-green-200 rounded-xl  justify-evenly items-center ">
            <div className="callLogo">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  fill="white"
                  stroke="#5ECD81"
                  strokeWidth="4"
                />
                <g clipPath="url(#clip0_123_1937)">
                  <g clipPath="url(#clip1_123_1937)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M60 40C60 51.045 51.045 60 40 60C28.955 60 20 51.045 20 40C20 28.955 28.955 20 40 20C51.045 20 60 28.955 60 40ZM40.7167 34.765C38.7717 35.5733 34.8833 37.2483 29.0533 39.7883C28.1067 40.165 27.61 40.5333 27.565 40.8933C27.4883 41.5033 28.2517 41.7433 29.2883 42.0683C29.43 42.1133 29.5767 42.1583 29.7267 42.2083C30.7483 42.54 32.1217 42.9283 32.835 42.9433C33.4833 42.9567 34.2067 42.69 35.005 42.1433C40.4517 38.465 43.2633 36.6067 43.44 36.5667C43.565 36.5383 43.7383 36.5017 43.855 36.6067C43.9717 36.71 43.96 36.9067 43.9483 36.96C43.8717 37.2817 40.8817 40.0633 39.3317 41.5033C38.8483 41.9517 38.5067 42.27 38.4367 42.3433C38.28 42.505 38.12 42.66 37.9667 42.8083C37.0167 43.7217 36.3067 44.4083 38.0067 45.5283C38.8233 46.0667 39.4767 46.5117 40.1283 46.955C40.84 47.44 41.55 47.9233 42.47 48.5267C42.7033 48.68 42.9267 48.8383 43.145 48.9933C43.9733 49.585 44.7183 50.115 45.6383 50.0317C46.1717 49.9817 46.725 49.48 47.005 47.9817C47.6667 44.4383 48.97 36.765 49.2717 33.6017C49.29 33.339 49.2788 33.0751 49.2383 32.815C49.2141 32.6049 49.1118 32.4116 48.9517 32.2733C48.7133 32.0783 48.3433 32.0367 48.1767 32.04C47.425 32.0533 46.2717 32.455 40.7167 34.765Z"
                      fill="#5ECD81"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_123_1937">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(20 20)"
                    />
                  </clipPath>
                  <clipPath id="clip1_123_1937">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(20 20)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-semibold text-xl">Join us on telegram</p>
            <p className="text-lg">Oguntechies</p>
          </div>
          <div className="call-card flex flex-col p-10 h-64 w-3/4 mx-auto my-3 lg:w-1/4 bg-green-200 rounded-xl  justify-evenly items-center ">
            <div className="callLogo">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  fill="white"
                  stroke="#5ECD81"
                  strokeWidth="4"
                />
                <path
                  d="M52 22.1999L28 31.7999C25.8 32.5999 24 35.3999 24 37.7999V55.1999C24 57.5999 25.8 58.7999 28 57.9999L52 48.3999C54.2 47.5999 56 44.7999 56 42.3999V24.9999C56 22.5999 54.2 21.3999 52 22.1999ZM53.2 27.3999L41.2 45.9999L27.8 36.9999C27.6 36.7999 27 36.1999 27.4 35.5999C27.8 34.7999 28.8 35.1999 28.8 35.1999L41.4 39.7999C41.4 39.7999 51 27.1999 51.6 26.3999C51.8 25.9999 52.4 25.7999 53 26.1999C53.6 26.5999 53.4 27.1999 53.2 27.3999Z"
                  fill="#5ECD81"
                />
              </svg>
            </div>
            <p className="font-semibold text-xl">Send a mail</p>
            <p className="text-lg">oguntechies@mail.com</p>
          </div>
        </div>
      </section>
      <section className="formaction block my-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-3xl mb-8 font-semibold">Have any question?</h2>
          </div>
          <form className="flex flex-col justify-center p-10 items-center min-h-[80vh] shadow-xl w-10/12">
            <div className="names flex-col lg:flex-row flex w-full justify-evenly mb-4">
              <div className="flex mt-4 flex-col lg:w-1/3 ">
                <label htmlFor="Firstname" className="text-lg font-medium mb-2">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="p-4 border-slate-500 border-solid border-2"
                />
              </div>
              <div className="flex mt-4 flex-col lg:w-1/3">
                <label htmlFor="Lastname" className="text-lg font-medium mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-4 border-slate-500 border-solid border-2"
                />
              </div>
            </div>
            <div className="address lg:flex-row flex-col mt-4 flex w-full justify-evenly mb-4">
              <div className="flex flex-col lg:w-1/3 ">
                <label htmlFor="Email" className="text-lg font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Your mail"
                  className="p-4 border-slate-500 border-solid border-2"
                />
              </div>
              <div className="flex mt-4 flex-col lg:w-1/3 ">
                <label htmlFor="phone" className="text-lg mb-2 font-medium">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+234"
                  className="p-4 border-slate-500 border-solid border-2"
                />
              </div>
            </div>
            <div className="lg:w-9/12 mt-4 my-auto lg:-ml-6 flex flex-col">
              <textarea
                name=""
                placeholder="message"
                id=""
                className="resize-none py-4 px-1 w-full border-slate-500 border-solid border-2"
                cols={60}
              ></textarea>
            </div>
            <div className="flex mt-4 justify-start w-full ">
              <button
                className="md:ml-28 text-xl font-semibold bg-green-400 rounded-xl text-white p-3 md:py-3 md:px-6"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
