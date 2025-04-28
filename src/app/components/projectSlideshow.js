'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/scrollbar';

import PrimaryButton from './atoms/button';
import SectionTitle from './atoms/sectionTitle';
import Card from './molecules/card';
import TagList from './molecules/tag-list';

export default function ProjectSlideshow({
  title = "Título",
  isChild = false
  }) {
  return (
    <section className="overflow-x-hidden">
      <div className={`w-full max-w-[1150px] mx-auto space-y-12 ${isChild ? 'py-10' : 'py-24'}`}>
        {
          isChild
          ? <div className="flex items-center justify-between">
              <h2 className="text-3xl text-[#636B69] font-bold">{title}</h2>
              <a href="" className="bg-[#EFEFEF] text-black inline-flex px-6 py-3 font-bold rounded-full">Ve todos</a>
            </div>
          : <h2 className="text-5xl text-[#636B69] font-bold">{title}</h2>
        }
        {
          !isChild && <TagList />
        }
        <Swiper
          modules={[Navigation, Scrollbar]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={32}
          slidesPerView={1.7}
          navigation
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
