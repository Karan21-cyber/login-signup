"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { play } from "../layout";
import Login from "../components/login/login-form";
import ImageSwiper from "../components/login/image-swiper";

function Page() {
  return (
    <section className={` signup-section w-full h-screen flex overflow-hidden`}>
      <div className="part1-container relative w-full lg:w-[50%] flex px-[50px] justify-between items-center flex-col bg-[#FFF]">
        <div className="flex w-full justify-between mt-10 ">
          <Image
            width={220}
            height={60}
            alt="backgroundImage"
            src={"/login/logo.png"}
            className="background-image object-contain "
          />
          <BsCart3
            size={45}
            className="cart-icon p-3 rounded-xl bg-green-yellow text-dark-green cursor-pointer"
          />
        </div>

        <div className="form-wrapper  flex flex-col ">
          <h1
            className={`form-highlight  text-3xl md:text-3xl font-semibold -tracking-[0.64px] text-center ${play.className}`}
          >
            Welcome back to <span className="text-green-yellow">OrganFarm</span>
          </h1>

          <h1
            className={`form-highlight mt-9  text-4xl md:text-6xl font-bold -tracking-[1.34px] ${play.className}`}
          >
            Login
          </h1>

          <div className="form-container mt-11 ">
            <Login />
          </div>
          <h1 className="bottom-text  text-xs mt-3 ">
            Don&#39;t Have an Account?{" "}
            <Link
              href="http://localhost:3000/signup"
              className="login-link capitalize font-bold text-green-yellow"
            >
              SIGNUP
            </Link>
          </h1>
        </div>
        <div className="flex w-full justify-between flex-col xl:flex-row mb-6 gap-2">
          <h1 className="bottom-text  text-base  font-normal">
            Copyright &copy; 2023{" "}
            <Link
              href="http://localhost:3000/signup"
              className="login-link capitalize  text-green-yellow"
            >
              OrgaFarm
            </Link>{" "}
            All rights reserved
          </h1>
          <h1 className="bottom-text  text-base font-normal ">
            Terms & Conditions
          </h1>
        </div>
      </div>
      <div className="part2-container relative w-[50%] hidden  lg:block ">
        <ImageSwiper />
      </div>
    </section>
  );
}

export default Page;
