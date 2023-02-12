import Image from "next/image";
import React from "react";
import Rec2 from "./../public/assets/Rectangle 3810.png";
import workman from "./../public/assets/workman.png";
import samuel from "./../public/assets/SamuelChinedu.png";
import olafare from "./../public/assets/OlafareTimileyin.png";
import adebisi from "./../public/assets/Adebisi.png";
import chimy from "./../public/assets/ChimuanyaDike.png";

export default function About() {
  return (
    <div className="flex flex-col max-w-md md:max-w-full mx-auto">
      <section className="about-intro relative flex">
        <h1 className="text-3xl top-32 text-white right-2/4 font-bold absolute">
          About Us
        </h1>
        <Image src={Rec2} alt="about" />
      </section>
      <section className="introText mt-10 block">
        <div className="flex flex-col-reverse md:flex-row md:w-10/12 m-auto p-10 justify-between">
          <div className="textImg md:flex md:justify-center md:items-center md:w-1/2">
            <Image src={workman} alt="man working" />
          </div>
          <div className="actual  md:w-1/2 mb-10 md:ml-10">
            <h3 className="text-green-400 font-semibold mb-6 ">Who we are</h3>
            <h2 className="font-bold leading-snug md:leading-tight text-2xl">
              Helping techies in Ogun State, <br className="hidden md:inline" /> Nigeria connect, network and{" "}
              <br className="hidden md:inline" /> collaborate.
            </h2>
            <div className="md:pr-10 mt-3 text-base md:leading-relaxed">
              <p>
                We are an online community of techies in Ogun State, Nigeria.
                The idea is to bring together all techies in Ogun State and
                creating a platform for growth, development and sharing of
                ideas.
              </p>
              <p className="mt-3">
                We desire to change the world while at the same time, encourage
                technology and entrepreneurship among members of the community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="vision flex flex-col md:flex-row justify-evenly md:justify-center my-10">
        <div className="mission-card flex relative shadow-lg flex-col bg-green-100 md:mr-10 w-4/5 md:mx-0 mx-auto mb-5 md:w-80  rounded-2xl px-12 py-4 items-center justify-center">
          <div className="absolute bg-white rounded-full p-4 -top-14">
            <svg
              width="50"
              height="50"
              viewBox="0 0 73 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.3492 10.4499C31.3492 6.9994 28.9287 3.0854 26.1992 0.149902C23.6242 2.7249 21.0492 7.2569 21.0492 10.4499C21.0492 12.9219 23.3667 15.5999 26.1992 15.5999C29.0317 15.5999 31.3492 13.1794 31.3492 10.4499ZM51.9492 10.4499C51.9492 6.9994 49.5287 3.0854 46.7992 0.149902C44.2242 2.7249 41.6492 7.2569 41.6492 10.4499C41.6492 12.9219 43.9667 15.5999 46.7992 15.5999C49.6317 15.5999 51.9492 13.1794 51.9492 10.4499ZM31.3492 41.3499V23.3249C31.3492 20.4924 29.0317 18.1749 26.1992 18.1749C23.2637 18.1749 21.0492 20.6984 21.0492 23.3249V41.3499C21.0492 44.1824 23.3667 46.4999 26.1992 46.4999C29.1347 46.4999 31.3492 43.9764 31.3492 41.3499ZM51.9492 41.3499V23.3249C51.9492 20.4924 49.6317 18.1749 46.7992 18.1749C43.8637 18.1749 41.6492 20.6984 41.6492 23.3249V41.3499C41.6492 44.1824 43.9667 46.4999 46.7992 46.4999C49.7347 46.4999 51.9492 43.9764 51.9492 41.3499ZM72.5492 46.4999C72.5492 38.8779 65.2877 32.2344 54.5242 28.6809V41.3499C54.5242 45.6244 51.0737 49.0749 46.7992 49.0749C42.5247 49.0749 39.0742 45.6244 39.0742 41.3499V25.9514C38.1987 25.9514 37.3747 25.8999 36.4992 25.8999C35.6237 25.8999 34.7997 25.9514 33.9242 25.9514V41.3499C33.9242 45.6244 30.4737 49.0749 26.1992 49.0749C21.9247 49.0749 18.4742 45.6244 18.4742 41.3499V28.6809C7.71072 32.2344 0.449219 38.8779 0.449219 46.4999C0.449219 53.7614 5.34172 60.1474 16.9807 63.8554C22.6972 65.6579 29.2892 69.6234 36.4992 69.6234C43.7092 69.6234 50.3527 65.6064 56.0177 63.8039C67.6052 60.1474 72.5492 53.7614 72.5492 46.4999ZM36.4992 74.4644C43.8637 74.4644 50.6102 70.3959 56.4812 68.7479C66.2662 66.0184 69.3047 61.8469 72.5492 56.7999V72.2499C72.5492 83.6314 56.4297 92.8499 36.4992 92.8499C16.5687 92.8499 0.449219 83.6314 0.449219 72.2499V56.7999C3.74522 61.8984 7.24722 66.0699 16.6717 68.7994C22.4912 70.4989 29.2377 74.4644 36.4992 74.4644Z"
                fill="#5ECD81"
              />
            </svg>
          </div>
          <div className="mt-6 flex items-center justify-center flex-col">
            <h3>Our Mission</h3>
            <p className="text-center">
              To connect and empower you with information, support and a
              platform for growth towards success.
            </p>
          </div>
        </div>
        <div className="vision-card shadow-lg flex relative flex-col bg-green-100 w-4/5 md:mx-0 mx-auto mb-5 md:mt-0 mt-20 md:w-80  rounded-2xl px-12 py-4 items-center justify-center">
          <div className="absolute bg-white rounded-full p-4 -top-14">
            <svg
              width="50"
              height="50"
              viewBox="0 0 73 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.3492 10.4499C31.3492 6.9994 28.9287 3.0854 26.1992 0.149902C23.6242 2.7249 21.0492 7.2569 21.0492 10.4499C21.0492 12.9219 23.3667 15.5999 26.1992 15.5999C29.0317 15.5999 31.3492 13.1794 31.3492 10.4499ZM51.9492 10.4499C51.9492 6.9994 49.5287 3.0854 46.7992 0.149902C44.2242 2.7249 41.6492 7.2569 41.6492 10.4499C41.6492 12.9219 43.9667 15.5999 46.7992 15.5999C49.6317 15.5999 51.9492 13.1794 51.9492 10.4499ZM31.3492 41.3499V23.3249C31.3492 20.4924 29.0317 18.1749 26.1992 18.1749C23.2637 18.1749 21.0492 20.6984 21.0492 23.3249V41.3499C21.0492 44.1824 23.3667 46.4999 26.1992 46.4999C29.1347 46.4999 31.3492 43.9764 31.3492 41.3499ZM51.9492 41.3499V23.3249C51.9492 20.4924 49.6317 18.1749 46.7992 18.1749C43.8637 18.1749 41.6492 20.6984 41.6492 23.3249V41.3499C41.6492 44.1824 43.9667 46.4999 46.7992 46.4999C49.7347 46.4999 51.9492 43.9764 51.9492 41.3499ZM72.5492 46.4999C72.5492 38.8779 65.2877 32.2344 54.5242 28.6809V41.3499C54.5242 45.6244 51.0737 49.0749 46.7992 49.0749C42.5247 49.0749 39.0742 45.6244 39.0742 41.3499V25.9514C38.1987 25.9514 37.3747 25.8999 36.4992 25.8999C35.6237 25.8999 34.7997 25.9514 33.9242 25.9514V41.3499C33.9242 45.6244 30.4737 49.0749 26.1992 49.0749C21.9247 49.0749 18.4742 45.6244 18.4742 41.3499V28.6809C7.71072 32.2344 0.449219 38.8779 0.449219 46.4999C0.449219 53.7614 5.34172 60.1474 16.9807 63.8554C22.6972 65.6579 29.2892 69.6234 36.4992 69.6234C43.7092 69.6234 50.3527 65.6064 56.0177 63.8039C67.6052 60.1474 72.5492 53.7614 72.5492 46.4999ZM36.4992 74.4644C43.8637 74.4644 50.6102 70.3959 56.4812 68.7479C66.2662 66.0184 69.3047 61.8469 72.5492 56.7999V72.2499C72.5492 83.6314 56.4297 92.8499 36.4992 92.8499C16.5687 92.8499 0.449219 83.6314 0.449219 72.2499V56.7999C3.74522 61.8984 7.24722 66.0699 16.6717 68.7994C22.4912 70.4989 29.2377 74.4644 36.4992 74.4644Z"
                fill="#5ECD81"
              />
            </svg>
          </div>
          <div className="mt-6 flex items-center justify-center flex-col">
            <h3>Our vision</h3>
            <p className="text-center">
              We want to connect thousands and empower thousands more to prosper
              through tech while rebuilding OgunState through tech
            </p>
          </div>
        </div>
      </section>
      <section className="founders hidden bg-green-200  my-20">
        <div className="flex flex-col justify-center mt-20">
          <h2 className="text-center text-2xl mb-6 font-bold">
            Meet our founding members
          </h2>
          <div className="members-wrapper w-11/12 m-auto flex justify-evenly">
            <div className="membercard p-3 flex flex-col w-1/5">
              <Image src={samuel} alt="samuel" />
              <div className="profile flex flex-col justify-evenly mt-4 items-start">
                <p className=" mb-3 font-semibold text-xl">Samuel Chinedu</p>
                <p className="mb-3 font-light text-base">Convener</p>
                <ul className="flex justify-between  mb-3 w-2/4 items-start">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
           
            <div className="membercard flex p-3 flex-col w-1/5">
              <Image src={chimy} alt="chimy" />
              <div className="profile flex flex-col justify-evenly mt-4 items-start">
                <p className=" mb-3 font-semibold text-xl">Chimuanya Dike</p>
                <p className="mb-3 font-light text-base">Community Manager</p>
                <ul className="flex justify-between mb-3 w-2/4 items-start">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="membercard flex p-3 flex-col w-1/5">
              <Image src={olafare} alt="olafare" />
              <div className="profile flex flex-col justify-evenly mt-4 items-start">
                <p className=" mb-3 font-semibold text-xl">Olafare Timileyin</p>
                <p className="mb-3 font-light text-base">Chief Strategist</p>
                <ul className="flex justify-between mb-3 w-2/4 items-start">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="membercard flex p-3 flex-col w-1/5">
              <Image src={adebisi} alt="adebisi" />
              <div className="profile flex flex-col justify-evenly mt-4 items-start">
                <p className=" mb-3 font-semibold text-xl">Adebisi</p>
                <p className="mb-3 font-light text-base">Web Developer</p>
                <ul className="flex justify-between mb-3 w-2/4 items-start">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="#231C1C"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}
