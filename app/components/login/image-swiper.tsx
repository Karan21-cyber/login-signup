"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

function ImageSwiper() {
  return (
    <section className="w-full ">
      <Swiper
        style={{height: "100vh" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
     
          <SwiperSlide
            className="image-slider w-full h-full relative"
          >
            <Image
              fill
              src={"/login/imageslider.png"}
              alt="imageslider"
              className="image absolute"
            />
            <div className="swiper-information w-full absolute bottom-[10vh] z-[99] ">
                <h1 className="text-highlight text-white text-center text-4xl font-semibold -trackling-[0.64px]"><q>Save the Planet...Buy Organic</q></h1>
                <p className="text-name text-white text-center text-lg font-semibold -trackling-[0.64px] mt-2">-Nancy Philips-</p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="image-slider w-full h-full relative"
          >
            <Image
              fill
              src={"/login/imageslider.png"}
              alt="imageslider"
              className="image absolute"
            />
            <div className="swiper-information w-full absolute bottom-[10vh] z-[99] ">
                <h1 className="text-highlight text-white text-center text-4xl font-semibold -trackling-[0.64px]"><q>Buy Organics...Save the Planet</q></h1>
                <p className="text-name text-white text-center text-lg font-semibold -trackling-[0.64px] mt-2">-Philips Nancy-</p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="image-slider w-full h-full relative"
          >
            <Image
              fill
              src={"/login/imageslider.png"}
              alt="imageslider"
              className="image absolute"
            />
            <div className="swiper-information w-full absolute bottom-[10vh] z-[99] ">
                <h1 className="text-highlight text-white text-center text-4xl font-semibold -trackling-[0.64px]"><q>Humans are good with organics</q></h1>
                <p className="text-name text-white text-center text-lg font-semibold -trackling-[0.64px] mt-2">-Mathue Philip-</p>
            </div>
          </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default ImageSwiper;
