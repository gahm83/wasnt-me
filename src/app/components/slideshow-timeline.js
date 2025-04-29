'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

import PrimaryButton from './atoms/button';
import SectionTitle from './atoms/sectionTitle';
import Card from './molecules/card';
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
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
          slidesPerView={3}
          className="swiper-timeline">
        {
        slideLabels.map((label, index) => (
          <SwiperSlide key={index}>
            <h2>{label}</h2>
            <p>Contenido del slide {index + 1}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
