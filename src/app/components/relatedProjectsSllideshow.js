'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/scrollbar';

import PrimaryButton from './atoms/button';
import SectionTitle from './atoms/sectionTitle';
import Card from './molecules/card-project';
import TagList from './molecules/tag-list';

export default function RelatedProjectSlideshow({
  title = "Título",
  isChild = false
  }) {
  return (
    <section>
      <div className="bg-[#F5F5F5] overflow-x-hidden pt-16 pb-32">
      
        <div className="w-full max-w-[1150px] mx-auto space-y-12">
          <h2 className="text-5xl text-[#636B69] font-bold">Proyectos relacionados</h2>
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
            <SwiperSlide><Card schema="light" /></SwiperSlide>
            <SwiperSlide><Card schema="light" /></SwiperSlide>
            <SwiperSlide><Card schema="light" /></SwiperSlide>
            <SwiperSlide><Card schema="light" /></SwiperSlide>
            <SwiperSlide><Card schema="light" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
