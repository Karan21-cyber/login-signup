import Image from "next/image";
import React from "react";
import { loginAtom } from "../../../atoms/auth";
import { useRecoilState } from "recoil";

const HomeSection = () => {
  const [text, setText] = useRecoilState(loginAtom);
  return (
    <section className="home-section mt-40 flex justify-around">
      <div className="home-highlight relative w-[450px] h-[500px]  ">
        <Image
          fill
          alt="backgroundImage"
          src={"/homes/Background.png"}
          className="background-image absolute "
        />
        <div className="home-highlight-info absolute flex flex-col px-2 md:flex-row top-[1%] xl:top-[30%] left-[20%] w-[400px] md:w-[500px] flex-wrap">
          <h1 className="home-header text-[58px]  font-bold ">
            {text
              ? `Welcome ${text.toUpperCase()}`
              : "Sign In to Know Yourself"}
          </h1>
        </div>
      </div>
      <Image
        width={500}
        height={500}
        alt="backgroundImage"
        src={"/homes/Picture.png"}
        className="background-image object-contain"
      />
    </section>
  );
};

export default HomeSection;
