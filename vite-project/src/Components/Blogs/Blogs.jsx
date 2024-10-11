import React from 'react';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.jpg';

const BlogData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rerum delectus eligendi? Ducimus facere quasi veniam ut? Voluptas, atque, soluta natus cumque in commodi distinctio, incidunt facere facilis quis voluptate?",
        link: "#",
        img: pic1,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rerum delectus eligendi? Ducimus facere quasi veniam ut? Voluptas, atque, soluta natus cumque in commodi distinctio, incidunt facere facilis quis voluptate?",
        link: "#",
        img: pic2,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rerum delectus eligendi? Ducimus facere quasi veniam ut? Voluptas, atque, soluta natus cumque in commodi distinctio, incidunt facere facilis quis voluptate?",
        link: "#",
        img: pic3,
    }
];

const Blogs = () => {
    return (
        <section className='bg-stone-400 '>
            <div className='container py-14'>
                <h1 className='text-3xl font-bold text-center pb-8'>Blogs</h1>
                {/* card section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {BlogData.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className='w-full h-60 object-cover rounded-2xl'
                            />
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold line-clamp-2'>{item.title}</h1>
                                <p className='text-gray-500 line-clamp-2'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;