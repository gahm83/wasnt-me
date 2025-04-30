'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

import PrimaryButton from './atoms/button';
import SectionTitle from './atoms/sectionTitle';
import Card from './molecules/card-project';
import TagList from './molecules/tag-list';

export default function SlideshowTimeline({
  title = "Título",
  isChild = false
}) {
  const slideLabels = [
    '1974',
    '1980',
    '1997',
    '2002',
    '2003',
    '2011',
    '2012',
    '2013',
    '2016',
    '2018',
    '2009',
    '2023',
    '2024',
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${slideLabels[index]}</span>`;
    },
  };

  return (
    <section className="overflow-x-hidden">
      <div className={`w-full max-w-[1150px] mx-auto space-y-12 ${isChild ? 'py-10' : 'py-24'}`}>
      <h1 className="text-5xl font-bold">Ares, <br />a través del tiempo</h1>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
          slidesPerView={3}
          className="swiper-timeline">
        {
        slideLabels.map((label, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col space-y-20">
              <div className="flex items-center justify-start relative before:block before:w-full before:h-px before:content-[''] before:absolute before:bottom-1 before:translate-y-1/2 before:bg-black/15">
                <h2 className="text-7xl relative text-[#407978] [&_span]:block after:block after:w-full after:h-2 after:content-[''] after:relative after:bg-[#407978] after:rounded-full">{label}</h2>
              </div>
              <div className="flex flex-col px-6 text-base space-y-8 border-l border-black/15">
                <h2 className="text-2xl text-black font-bold">Plaza Patria</h2>
                <p>Diseñado por el Arq. Jacinto Arenas Serna, es el primer centro comercial techado de América Latina, convirtiéndose rápidamente en un referente comercial y punto de encuentro en la ciudad.</p>
                <figure className="m-0 p-0 aspect-square bg-stone-600 rounded-xl"></figure>
              </div>
          
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
