import React from "react";
import P1 from "../../assets/fanta1.png";
import P2 from "../../assets/fanta2.png";
import P3 from "../../assets/fanta3.png";
import { delay } from "framer-motion"; 
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
    return {
        hidden: {
        y: 100,
        opacity: 0,
        },
        show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
        },
    };
};

const ProductsData = [
    {
        id: 1,
        title: "Orange Fanta",
        image: P1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus corrupti fugit fugiat minus quo, dicta odit magni a ea, necessitatibus amet doloribus quis odio accusantium dolorum ratione enim voluptates?",
        delay: 0.5,
    },
    {
        id: 2,
        title: "Lemon Fanta",
        image: P2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus corrupti fugit fugiat minus quo, dicta odit magni a ea, necessitatibus amet doloribus quis odio accusantium dolorum ratione enim voluptates?",
        delay: 0.7,
    },
    {
        id: 3,
        title: "Cola Zero",
        image: P3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus corrupti fugit fugiat minus quo, dicta odit magni a ea, necessitatibus amet doloribus quis odio accusantium dolorum ratione enim voluptates?",
        delay: 0.9,
    }
];


const Products = () => {
  return (
    <div className="bg-gray-100 py-8">
        <div className="container py-14">
            <h1 className="text-3xl font-bold text-center pb-10">Products</h1>
            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ProductsData.map((item) => (
                    <motion.div
                        variants={fadeUp(item.delay)}
                        key={item.id}
                        initial="hidden"
                        whileInView={"show"}
                        className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
                        >
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-[100px] mb-4 hover:rotate-12 hover:scale-150 duration-300"
                        />
                        <div className="text-center space-y-2">
                            <h1 className="text-2xl font-bold font-handwriting text-center">{item.title}</h1>
                            <p className="text-center text-sm text-gray-600 ">{item.desc}</p>
                            <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">Buy Now </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      
    </div>
  );
}

export default Products;