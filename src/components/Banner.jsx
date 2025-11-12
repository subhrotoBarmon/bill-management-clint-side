import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import useAxios from '../hook/useAxios';

const Banner = () => {
     let [loaderData,setLoaderData]=useState([]);
      let axiosInstance=useAxios();
      useEffect(()=>{
          axiosInstance.get('/recentBills')
          .then(data=>{
              // console.log(data);          
              setLoaderData(data?.data);
          })
      },[axiosInstance])

  return (
    <div className="w-full max-w-[1180px] mx-auto pt-[60px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={false}
        autoplay={{delay: 1000}}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl shadow-lg"
      >
        {loaderData.map(data => (
          <SwiperSlide key={data?.id}>
            <div className="relative w-full h-[500px] bg-gray-100 flex items-center justify-center">
              <img
                src={data?.image}
                alt={data?.title}
                className="object-cover w-full h-full brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-3xl font-bold">{data?.category}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;