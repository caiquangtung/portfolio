"use client";
// @flow strict

import { userData } from "@/data/user-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

function HeroSection({ profile }) {
  const [text, setText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const fullText = "I'm .NET Dev"; 

  useEffect(() => {
    const typingSpeed = 150; 
    const delayBetweenLoops = 1000; 

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0); 
      }, delayBetweenLoops);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <h1 className="text-white text-center md:text-left text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">
          Hello! 👋, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-transparent bg-clip-text">
            {profile.name}
          </span>
        </h1>
        <p className="text-gray-300 mt-2 text-center md:text-left">
          Welcome to my portfolio site, where you can learn more about me.
        </p>
        <h2
          className="mt-4 text-white text-center md:text-left text-xl lg:text-2xl font-medium leading-relaxed"
          style={{ minHeight: "40px" }} 
        >
          {text}
        </h2>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={profile.name}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <div className="w-full flex justify-center items-center gap-5">
            <Link
              href={userData.github}
              target="_blank"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={userData.linkedIn}
              target="_blank"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={userData.facebook}
              target="_blank"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href={userData.leetcode}
              target="_blank"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
            <Link
              href={userData.X}
              target="_blank"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaSquareXTwitter size={24} />
            </Link>
          </div>

          <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link
              target="_blank"
              href={userData.resume}
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>
        </div>

        <div className="h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-blue-400">public class</span>
                <span className="mr-2 text-violet-400">Developer</span>
              </div>
              <div>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public string
                </span>
                <span className="text-white">Name</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-green-400">{`"${
                  profile?.name || ""
                }"`}</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public string
                </span>
                <span className="text-white">Company</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-green-400">{`"${
                  profile?.company || ""
                }"`}</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public string
                </span>
                <span className="text-white">Location</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-green-400">{`"${
                  profile?.location || ""
                }"`}</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public int
                </span>
                <span className="text-white">Followers</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-orange-400">
                  {profile?.followers || 0}
                </span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public int
                </span>
                <span className="text-white">Following</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-orange-400">
                  {profile?.following || 0}
                </span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public int
                </span>
                <span className="text-white">Repositories</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-orange-400">
                  {profile?.public_repos || 0}
                </span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public string[]
                </span>
                <span className="text-white">Skills</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-blue-400">new</span>
                <span className="text-white"> string[]</span>
                <span className="text-gray-400">{" { "}</span>
                {userData.skills.map((skill, i) => (
                  <span key={i}>
                    <span className="text-green-400">{`"${skill}"`}</span>
                    {i !== userData.skills.length - 1 && (
                      <span className="text-gray-400">{", "}</span>
                    )}
                  </span>
                ))}
                <span className="text-gray-400">{" }"}</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-blue-400">
                  public bool
                </span>
                <span className="text-white">IsHireable</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-orange-400">
                  {String(profile?.hireable ?? false).toLowerCase()}
                </span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
