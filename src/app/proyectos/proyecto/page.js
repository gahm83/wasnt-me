'use client'

import Image from "next/image";
import FooterHero from "../../components/molecules/hero-footer";
import TagList from "../../components/molecules/tag-list";
import IconSearch from "../../components/atoms/icons/icon-search";
import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";
import IconSort from "@/app/components/atoms/icons/icon-sort";
import Card from "@/app/components/molecules/card-project";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import imageSketch from '../../../../public/proyecto-dibujo.jpg';
import RelatedProjectSlideshow from "@/app/components/relatedProjectsSllideshow";


export default function Proyecto () {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-12">
          <div className="grid grid-cols-12">
            <div className="col-span-5 flex flex-col space-y-9">
              <nav className="flex items-center space-x-2 text-sm font-bold [&_a]:text-[#A1A1A1]">
                <a href="">Proyectos</a>
                <IconArrowRight />
                <a href="">Usos Mixtos</a>
                <IconArrowRight />
                <a href="">Averanda</a>
              </nav>
              <h2 className="text-5xl text-[#636B69] font-bold">Averanda</h2>
            </div>
            <div className="col-span-7">
              <p>El concepto general arquitectónico se fundamentó en crear un espacio de usos mixtos que incluye centro comercial, oficinas, vivienda y hotel, este espacio cuenta con pasillos abiertos o semi-cubierto y un jardín central que manifiesta espacios agradables y tranquilos.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-lg"></div>
        <div className="bg-white overflow-hidden">
          <div className="w-full max-w-[1150px] mx-auto pt-20 pb-28">
            <div className="grid grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-xl text-[#A1A1A1] font-bold">Concepto</h2> 
                <dl className="[&_dt]:text-sm [&_dt]:text-[#A1A1A1] [&_dd]:mb-4">
                  <dt>Año</dt>
                  <dd>2019</dd>
                  <dt>Ubicación</dt>
                  <dd>Cuernavaca, Morelos, México</dd>
                  <dt>Superficie del terreno</dt>
                  <dd>48,916 m²</dd>
                  <dt>Superficie construida</dt>
                  <dd>257,356 m²</dd>
                  <dt>Cliente</dt>
                  <dd>Proarquitectura</dd>
                  <dt>Tipo de proyecto</dt>
                  <dd>Centro comercial, Usos Mixtos</dd>
                </dl>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl text-[#A1A1A1] font-bold">Concepto</h2> 
                <h1 className="text-5xl">Manifestar espacios agradables y tranquilos para ser transitados por los usuarios</h1>
              </div>
            </div>
            <div className="space-y-12 mt-12">
              <h2 className="text-5xl text-[#636B69] font-bold">Galería</h2>
              <Swiper
                modules={[Navigation, Scrollbar]}
                scrollbar={{ draggable: true }}
                spaceBetween={24}
                slidesPerView={4}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper-gallery">
                {
                  Array.from({ length: 12 }).map((_, index) => (
                    <SwiperSlide>
                      <div className="bg-stone-600 aspect-video rounded-xl">
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-lg"></div>
        <div className="bg-white overflow-hidden">
          <div className="w-full max-w-[1150px] mx-auto">
            <div className="grid grid-cols-2 items-center pt-20 pb-12">
              <div>
                <Image src={imageSketch} alt="Picture of the author" />
              </div>
              <div>
                <p>El proyecto se compone por un cuerpo de 2 niveles de área comercial, 4 niveles de estacionamiento, que incluyen 3 torres de vivienda de 18 niveles cada una y alrededor de 60 departamentos por torre, una torre de oficinas de 10 niveles y 2 hoteles business class. En general el centro comercial se levantó en diferentes plataformas que se adaptan a la morfología del terreno, además cuenta con pasillos, circulaciones verticales y elevadores que se comunican entre sí para poder hacer el traslado rápido y fácil entre los diferentes estacionamientos y las plantas del área comercial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="space-y-12">
          <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-lg"></div>
          <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-lg"></div>
          <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-lg"></div>
          <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-lg"></div>
        </div>
      </section>
      <section>
        <div className="bg-white">
          <div className="w-full max-w-[1150px] mx-auto py-20">
            <div className="grid grid-cols-4">
              <div className="space-y-4">
                <h2 className="text-xl text-[#A1A1A1] font-bold">Líderes</h2>
                <ul>
                  <li>Jacinto Arenas</li>
                  <li>Zyanya Quero</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl text-[#A1A1A1] font-bold">Equipo</h2> 
                <ul>
                  <li>Marlene García</li>
                  <li>Belén Coronado</li>
                  <li>Lourdes Barba</li>
                  <li>Ulises Rivera</li>
                  <li>Fernando Ayala</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProjectSlideshow />
    </main>
  );
}