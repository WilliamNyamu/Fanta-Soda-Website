import React from 'react'
import roku from '../../assets/roku.webp';
import prime from '../../assets/prime-video.webp';
import netflix from '../../assets/netflix.webp';
import firetv from '../../assets/fire-tv.webp';
import hulu from '../../assets/hulu-brand.webp';
import peacock from '../../assets/peacock-1.webp';


const partnerData = [
    {
        id: 1,
        image: roku,
        title: "Roku"
    },
    {
        id: 2,
        image: netflix,
        title: "Netflix"
    },
    {
        id: 3,
        image: firetv,
        title: "Fire tv"
    },
    {
        id: 4,
        image: prime,
        title: "Prime-video"
    },
    {
        id: 5,
        image: hulu,
        title: "Hulu-brand"
    }
];


const Partners = () => {
  return (
    <div className='bg-slate-900'>
        <div className='container p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {partnerData.map((item) => (
                    <div
                        key={item.id}
                        className='flex justify-center items-center p-3 gap-1'
                    >
                        <img src= {item.image} alt={item.title} className='max-w-[650px]' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partners;