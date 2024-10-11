import React from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut, delay } from "framer-motion";
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";

const SlideRight = (delay) => {
  return {
    hidden: {
       x: 100, 
       opacity: 0 
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: easeInOut,
        },
      },
      exit: {
        x: 100,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: easeInOut,
        },
      },
  };
};


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
              <AnimatePresence mode="wait">
                < motion.h1
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow">
                  {activeData.title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                < motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit" 
                  className="text-sm leading-loose text-white/80">
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                < motion.button
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"  
                  className="px-4 py-2  bg-white text-black inline-block font-normal rounded-sm">
                  Order Now
                </motion.button>
              </AnimatePresence>

              {/* list separator */}
              <div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} 
              className="flex items-center justify-center md:justify-start gap-4 md:mt-24 mb-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>TOP RECOMMENDATION</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* Image switcher */}
              <div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-10">
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
          <div className=" flex flex-col justify-end items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                src={activeData.image}
                alt={activeData.title}
                className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
              />
            </AnimatePresence>
            {/* Modal */}
            <div
            className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            >{activeData.modal}</div>
          </div>
          {/* whatsapp icon */}
          <div className="text-3xl text-white fixed bottom-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference flex justify-start ">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Hero;
