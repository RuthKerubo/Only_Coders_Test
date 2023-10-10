"use client";

import React from "react";
import "@styles/globals.css";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <main className="p-6 sm:p-10 space-y-6">
        <section
          className="w-full grid gap-6"
          style={{
            backgroundImage: 'url("/images/avatars.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-300/90 bg-blend-color shadow rounded-lg md:col-span-2 md:row-span-2 py-8">
            <div className="p-4 flex items-center mt-4 mr-3">
              <Image
                src="/images/bird.jpg"
                alt="Image Description"
                width={80}
                height={80}
                className="h-auto"
              />
              <div className="flex flex-col w-full max-w-xl ml-4">
                <span className="text-white text-lg font-bold">
                  NewsFeed
                  <br />
                  <span className="text-sm font-satoshi text-white">
                    Check what your friends have been up to!
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-4 gap-6">
          <div className="col-span-1 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Newest Members</span>
            </div>
            <div className="overflow-y-auto">
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/82.jpg"
                      alt="Annette Watson profile picture"
                    />
                  </div>
                  <div>
                    <span className="text-gray-600 flex items-center">
                      {" "}
                      {/* Use flex and items-center to align icon and text vertically */}
                      Annette Watson
                      <CheckBadgeIcon className="w-6 h-6 text-blue-500 ml-2" />{" "}
                      {/* Blue verified badge icon */}
                    </span>
                    <span className="text-gray-300">@watson</span>
                  </div>
                </li>

                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/77.jpg"
                      alt="Jane Lane profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Jane Lane
                    <br />
                    <span className="text-gray-300">@lane</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt="Pat Mckinney profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Pat Mckinney
                    <br />
                    <span className="text-gray-300">@Mckinney</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Norman Walters profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Norman Walters
                    <br />
                    <span className="text-gray-300">@walters</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt="Pat Mckinney profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Pat Mckinney
                    <br />
                    <span className="text-gray-300">@Mckinney</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Norman Walters profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Norman Walters
                    <br />
                    <span className="text-gray-300">@walters</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-2 bg-white shadow rounded-lg h-16">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100 mb-4">
              <span>All Updates</span>
              <div className="relative h-10 w-55 min-w-[200px]">
                <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                  <option value="">Everything</option>
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Show
                </label>
              </div>
            </div>
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg mb-4">
              <div className="p-4 flex-grow flex items-start">
                {" "}
                {/* Use items-start to align content at the top */}
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="Jane Doe profile picture"
                  className="hexagon-profile mr-4"
                />
                <div className="flex flex-col w-full max-w-xl">
                  <span className="text-gray-600 font-bold flex items-center">
                    {" "}
                    {/* Use flex and items-center to align icon and text vertically */}
                    Marina Valentine
                    <CheckBadgeIcon className="w-6 h-6 text-blue-500 ml-2" />{" "}
                    {/* Blue verified badge icon */}{" "}
                    <p className="bg-indigo-500 text-white px-2 py-1 rounded-full ml-2 font-bold mr-2">
                      Pro Member
                    </p>
                    <p className="text-gray-500 text-sm font-satoshi">
                      {" "}
                      replied to the topic
                    </p>
                  </span>
                  <blockquote className="font-sans text-sm text-gray-800">
                    <p className="mb-4 leading-tight">
                      <b>Welcome to the Cosplayers Group Forum</b> In the forum
                      <b>Cosplayers Group Forum</b> #Fun #Cosplayers
                    </p>
                  </blockquote>
                  <span
                    className="text-sm no-underline hover:underline focus:underline outline-none"
                    href="/"
                  >
                    Hello Everyone!
                  </span>

                  <div className="flex justify-between p-4 border-t border-gray-100">
                    <div className="flex">
                      <button className="text-gray-600 hover:text-blue-500">
                        0 Comments
                      </button>
                      <button className="text-gray-600 hover:text-green-500 ml-4">
                        1 Like
                      </button>
                    </div>
                    <button className="text-gray-600 hover:text-blue-500">
                      😊
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-y-auto bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                <div className="p-4 flex-grow flex items-start">
                  {" "}
                  {/* Use items-start to align content at the top */}
                  <img
                    src="https://randomuser.me/api/portraits/men/76.jpg"
                    alt="Jane Doe profile picture"
                    className="hexagon-profile mr-4"
                  />
                  <div className="flex flex-col w-full max-w-xl">
                    <span className="text-gray-600 font-bold flex items-center">
                      {" "}
                      {/* Use flex and items-center to align icon and text vertically */}
                      Marina Valentine
                      <CheckBadgeIcon className="w-6 h-6 text-blue-500 ml-2" />{" "}
                      {/* Blue verified badge icon */}{" "}
                      <p className="bg-indigo-500 text-white px-2 py-1 rounded-full ml-2 font-bold mr-2">
                        Pro Member
                      </p>{" "}
                      <p className="text-gray-500 text-sm font-satoshi">
                        Posted on update
                      </p>
                    </span>
                    <blockquote className="font-sans text-sm text-gray-800">
                      <p className="mb-4 leading-tight">2 years ago</p>
                    </blockquote>
                    <a
                      className="text-sm text-cyan-300 no-underline hover:underline focus:underline outline-none"
                      href="/"
                    >
                      https://www.twitch.tv/blizzard
                    </a>
                    <div className="p-4 flex-grow">
                      <Image
                        src="/images/cosplay.jpg"
                        alt="Image Description"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex justify-between p-4 border-t border-gray-100">
                      <div className="flex">
                        <button className="text-gray-600 hover:text-blue-500">
                          0 Comments
                        </button>
                        <button className="text-gray-600 hover:text-green-500 ml-4">
                          1 Like
                        </button>
                      </div>
                      <button className="text-gray-600 hover:text-blue-500">
                        0 Retweet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Popular Groups</span>
            </div>
            <div className="overflow-y-auto">
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/82.jpg"
                      alt="Annette Watson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Annette Watson
                    <br />
                    <span className="text-gray-300">4 Members</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/77.jpg"
                      alt="Jane Lane profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Jane Lane <br />
                    <span className="text-gray-300">3 Members</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt="Pat Mckinney profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Pat Mckinney
                    <br />
                    <span className="text-gray-300">5 Members</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Norman Walters profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Norman Walters
                    <br />
                    <span className="text-gray-300">7 Members</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt="Pat Mckinney profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Pat Mckinney
                    <br />
                    <span className="text-gray-300">6 Members</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-6 h-6 ml-auto text-gray-600"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </li>

                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Norman Walters profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Norman Walters
                    <br />
                    <span className="text-gray-300">1 Members</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-4 gap-6">
          <div className="col-span-1 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold">
              <span>Badges</span>
            </div>
            <div className="overflow-y-auto">
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 hexagon-profile overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/lego/6.jpg"
                      alt="Annette Watson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Posting Machine
                    <br />
                    <span className="text-gray-300">
                      Posted more than 20 profile activities in one day
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-2"></div>

          <div className="col-span-1 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Quests</span>
            </div>
            <div className="overflow-y-auto">
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      alt="Annette Watson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">
                    Globe Trotter
                    <br />
                    <span className="text-gray-300">
                      Has joined at least ten different groups
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
