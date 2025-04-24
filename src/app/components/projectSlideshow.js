'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import PrimaryButton from './atoms/button';
import SectionTitle from './atoms/sectionTitle';
import Card from './molecules/card';

export default function ProjectSlideshow() {
  return (
    <section>
      <div className="w-full max-w-[1150px] mx-auto space-y-12 py-24">
        <SectionTitle text="Proyectos destacados" />
        <nav className="flex space-x-4 [&>a]:block [&>a]:bg-[#EFEFEF] [&>a]:rounded-full [&>a]:font-bold [&>a]:text-sm [&>a]:py-[6px] [&>a]:px-4">
          <a href="">Usos Mixtos</a>
          <a href="">Centros comerciales</a>
          <a href="">Vivienda</a>
        </nav>
        <Swiper
          spaceBetween={32}
          slidesPerView={1.9}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
        <PrimaryButton link="Ver todos los proyectos" />
      </div>
    </section>
  );
}
