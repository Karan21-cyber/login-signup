'use client'

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { zen } from "../layout";
import SigupBanner from "../components/signup/signup-banner";
import SocialBtns from "../components/signup/social-btns";
import SignUp from "../components/signup/signup-form";

function Page() {
  return (
    <section className={`${zen} signup-section w-full h-screen flex overflow-hidden`}>
      <div className="part1-container relative w-full hidden  lg:block ">
        <Image
          fill
          alt="backgroundImage"
          src={"/signup/backgroundImage.png"}
          className="background-image"
        />
        <div className="signup-container w-full h-screen absolute z-[99] flex justify-center ">
          <SigupBanner />
        </div>
      </div>
      <div className="part2-container relative w-full flex  justify-center items-center flex-col bg-[#FFF]">
        <div className="form-wrapper w-[330px] md:w-[400px] flex flex-col gap-12 ">
          <div className="flex w-full justify-center lg:hidden">
            <Image
              width={220}
              height={60}
              alt="backgroundImage"
              src={"/signup/logo.png"}
              className="background-image bg-gray-300 p-2 rounded-[50px] object-contain  "
            />
          </div>
          <h1 className="form-highlight  text-2xl md:text-3xl font-bold -tracking-[0.5px] text-center">
            Join & Connect the Fastest Growing Online Community
          </h1>
          <div className="social-links-container flex justify-center gap-2">
            <SocialBtns
              icon={FcGoogle}
              name={"Sign Up with Google"}
              onClick={() => console.log("facebook")}
            />
            <SocialBtns
              icon={FaGithub}
              name={"Sign Up with Github"}
              onClick={() => console.log("github")}
            />
          </div>

          <div className="form-container">
            <SignUp />
          </div>
          <h1 className="bottom-text text-center text-xs mt-3 text-gray-label">
            Have an Account?{" "}
            <Link
              href="http://localhost:3000/login"
              className="login-link capitalize font-bold text-gray-text"
            >
              LOGIN
            </Link>
          </h1>
        </div>

        <Image
          width={120}
          height={120}
          alt="backgroundImage"
          src={"/signup/chat.png"}
          className="chat-image  absolute object-contain bottom-1 right-1"
        />
      </div>
    </section>
  );
}

export default Page;
