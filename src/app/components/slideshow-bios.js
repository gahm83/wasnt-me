'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import PrimaryButton from './atoms/button';
import SectionTitle from './atoms/sectionTitle';
import Card from './molecules/card-project';
import TagList from './molecules/tag-list';
import CardBio from './molecules/card-bio';

export default function SlideshowBios({
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
      <h2 className="text-5xl text-[#636B69] font-bold">Otras biografías</h2>
      <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          navigation>
        {
        slideLabels.map((label, index) => (
          <SwiperSlide key={index}>
            <CardBio />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
