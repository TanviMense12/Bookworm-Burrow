import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {FaStar} from "react-icons/fa6";
import { Avatar } from "flowbite-react";

import proPic from "../assets/profile.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>“A book lover’s paradise! The selection is vast, and I always find something new and exciting to read. The delivery is fast and reliable too!”.</p>
                    <Avatar rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>– Sarah Maxwell</h5>
                </div>
            </div>

        </SwiperSlide>
    
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>“Superb selection and easy browsing! I can spend hours discovering new authors and books I’ve never heard of. A true gem for readers.”
                    </p>
                    <Avatar placeholderInitials="JP" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>– John Philip</h5>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>“The best online bookstore I've come across! From bestsellers to hidden gems, they have it all. Plus, their prices are unbeatable.”
                    </p>
                    <Avatar img={proPic} rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>– Priya Shetty</h5>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>"A Reader's Paradise!"
                    “I found every book I was looking for – and then some! The browsing experience is smooth, and the recommendations are spot on.”
                    </p>
                    <Avatar placeholderInitials="ER" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>— Emily Reynolds</h5>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>"My Go-To for New Releases"
                    “They always have the latest titles, and I love their curated lists. It’s my favorite place to shop for books online!”
                    </p>
                    <Avatar img={proPic} rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>– Siya Sharma</h5>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default Review