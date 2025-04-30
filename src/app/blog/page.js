import Image from "next/image";
import SectionTitle from "../components/atoms/sectionTitle";
import ProjectSlideshow from "../components/projectSlideshow";
import FooterHero from "../components/molecules/hero-footer";
import TagList from "../components/molecules/tag-list";
import IconSearch from "../components/atoms/icons/icon-search";
import imageSede from "../../../public/sede-guadalajara.jpg";

import HeroHome from "../components/homeHero";
import IconChevronDown from "../components/atoms/icons/icon-chevron-down";
import SlideshowTimeline from "../components/slideshow-timeline";
import CardBio from "../components/molecules/card-bio";
import IconSort from "../components/atoms/icons/icon-sort";
import CardPost from "../components/molecules/card-post";

export default function ElEstudio() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-32 space-y-16">
          <div className="grid grid-cols-12 place-content-stretch">
            <div className="col-span-5">
              <figure className="m-0 p-0 w-full h-full bg-stone-600 rounded-xl">

              </figure>
            </div>
            <div className="col-span-7 px-12">
              <div className="flex flex-col items-start space-y-8">
                <div className="flex flex-col items-start">
                  <h4 className="text-[#A1A1A1] mb-3">Agosto 2004</h4>
                  <h2 className="text-5xl text-[#636B69] font-bold mb-6">Desarrollos de Usos Mixtos: Integradores de comunidades</h2>
                  <a className="block bg-[#EFEFEF] rounded-full font-bold text-xs py-[6px] px-4">Usos Mixtos</a>
                </div>
                <p>En un contexto de urbanización acelerada, los desarrollos de usos mixtos se perfilan como una solución esencial para optimizar el uso del suelo y mejorar la calidad de vida urbana…</p>
                <a href="" className="flex items-center justify-center px-4 h-10 font-bold bg-[#636B69] text-white rounded-full text-sm">Continuar Leyendo</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-full h-12 border border-black/15 rounded-full flex justify-between">
              <IconSearch />
              <input type="text" className="bg-transparent appearance-none grow outline-none pr-4" />
            </div>
            <a href="" className="bg-[#EFEFEF] text-black inline-flex px-6 py-3 space-x-2 font-bold rounded-full whitespace-nowrap">
              <IconSort />
              <span>Ordenar</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {
            Array.from({ length: 6 }).map((_, index) => <CardPost />)
          }
          </div>
        </div>
      </section>
    </main>
  );
}