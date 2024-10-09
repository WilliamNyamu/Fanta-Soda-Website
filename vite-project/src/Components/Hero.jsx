import React from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const HeroData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus corrupti fugit fugiat minus quo, dicta odit magni a ea, necessitatibus amet doloribus quis odio accusantium dolorum ratione enim voluptates?",
    price: "$40",
    modal: "Orange",
    bgColor: "#f97316",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus corrupti fugit fugiat minus quo, dicta odit magni a ea, necessitatibus amet doloribus quis odio accusantium dolorum ratione enim voluptates?",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Cola Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus corrupti fugit fugiat minus quo, dicta odit magni a ea, necessitatibus amet doloribus quis odio accusantium dolorum ratione enim voluptates?",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(HeroData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        {/* Navbar Component*/}
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* Data info */}
          <div className="flex flex-col text-white justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow">
                {activeData.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {activeData.subtitle}
              </p>
              <button className="px-4 py-2  bg-white text-black inline-block font-normal rounded-sm">
                Order Now
              </button>

              {/* list separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 md:mt-24 mb-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>TOP RECOMMENDATION</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* Image switcher */}
              <div className="grid grid-cols-3 gap-10">
                {HeroData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                      onClick={() => handleActiveData(data)}
                    >
                      <div className="flex justify-center">
                        <img
                          src={data.image}
                          alt={data.title}
                          className={`w-[80px] img-shadow ${
                            activeData.image === data.image
                              ? "opacity-100 scale-110"
                              : "opacity-50"
                          }`}
                        />
                      </div>
                      <div className="text-center !mt-6 space-y-1">
                        <p className="text-base line-through">{data.price}</p>
                        <p className="text-xl font-bold">{data.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          {/* whatsapp icon */}
        </div>
      </motion.div>
    </>
  );
};
export default Hero;
