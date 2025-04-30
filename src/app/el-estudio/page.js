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

export default function Home() {
  return (
    <main>
      <HeroHome />
      <section>
        <div className="w-full max-w-[1150px] mx-auto py-16">
          <div className="grid grid-cols-12">
            <div className="col-span-7 space-y-12">
              <h2 className="text-4xl font-bold text-[#636B69]">Con sede en <br />Guadalajara, Jalisco, México</h2>
              <p>Ares ha sido el motor creativo detrás de algunos de los proyectos comerciales y de retail más exitosos del país. Su crecimiento ha ido de la mano con destacados desarrolladores inmobiliarios y reconocidas marcas, consolidándose como un referente en la industria.</p>
            </div>
            <div className="col-span-5">
                              <Image src={imageSede} alt="Picture of the author" />
              
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto py-16 space-y-12">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h1 className="text-5xl">Nos motiva la calidad, la innovación y la excelencia en el diseño</h1>
            </div>
          </div>
          <div className="flex items-center justify-between">
          <div className="flex flex-col items-stretch justify-between h-[480px] p-6 min-w-[195px] relative before:absolute before:block before:w-full before:h-full before:top-0 before:left-0 before:content-[''] before:bg-[#F5F5F5] before:rounded-xl [&+div]:before:content-none">
              <h2 className="relative space-y-2 text-[#407978]">
                <span className="block text-8xl">01</span>
                <span className="font-bold">Escuchamos</span>
              </h2>
              <div className="relative">
                <p>Nos acercamos al cliente con una mentalidad abierta, prestando atención a sus ideas, necesidades y aspiraciones. Este paso es clave para establecer una relación de confianza y definir una visión compartida del proyecto.</p>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between h-[480px] p-6 min-w-[195px] relative before:absolute before:block before:w-px before:h-full before:top-0 before:left-0 before:content-[''] before:bg-black/15">
              <h2 className="relative space-y-2">
                <span className="block text-8xl text-[#A1A1A1]">02</span>
                <span className="font-bold">Entendemos</span>
              </h2>
              <div className="relative">

              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between h-[480px] p-6 min-w-[195px] relative before:absolute before:block before:w-px before:h-full before:top-0 before:left-0 before:content-[''] before:bg-black/15">
              <h2 className="relative space-y-2">
                <span className="block text-8xl text-[#A1A1A1]">03</span>
                <span className="font-bold">Exploramos</span>
              </h2>
              <div className="relative">

              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between h-[480px] p-6 min-w-[195px] relative before:absolute before:block before:w-px before:h-full before:top-0 before:left-0 before:content-[''] before:bg-black/15">
              <h2 className="relative space-y-2">
                <span className="block text-8xl text-[#A1A1A1]">04</span>
                <span className="font-bold">Solucionamos</span>
              </h2>
              <div className="relative">

              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between h-[480px] p-6 min-w-[195px] relative before:absolute before:block before:w-px before:h-full before:top-0 before:left-0 before:content-[''] before:bg-black/15">
              <h2 className="relative space-y-2">
                <span className="block text-8xl text-[#A1A1A1]">05</span>
                <span className="font-bold">Entregamos</span>
              </h2>
              <div className="relative">

              </div>
            </div>
          </div>
        </div>
      </section>
      <SlideshowTimeline />
      <section>
        <div className="w-full max-w-[1150px] mx-auto py-16">
          <div className="w-1/2 mb-16">
            <h1 className="text-5xl">Somos creativos que juntos diseñan procesos que impulsan resultados</h1>
          </div>
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl text-[#636B69] font-bold mb-12">Directores</h2> 
              <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {
                Array.from({ length: 6 }).map((_, index) => (
                  <div>
                    <figure className="bg-stone-600 aspect-[0.96/1] w-full m-0 p-0 rounded-xl"></figure>
                    <div className="flex flex-col items-start py-3">
                      <h2 className="text-xl font-bold">Alejandro Arenas</h2>
                      <p className="pb-6">CEO</p>
                      <a href="" className="flex items-center justify-center px-4 h-10 font-bold bg-[#636B69] text-white rounded-full text-sm">Ver biograía</a>
                    </div>
                  </div>
                ))
              }
              </div>
            </div>
            <div>
              <h2 className="text-3xl text-[#636B69] font-bold mb-12">Asociados</h2> 
              <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {
                Array.from({ length: 8 }).map((_, index) => (
                  <div>
                    <figure className="bg-stone-600 aspect-[0.96/1] w-full m-0 p-0 rounded-xl"></figure>
                    <div className="flex flex-col items-start py-3">
                      <h2 className="text-xl font-bold">Alejandro Arenas</h2>
                      <p className="pb-6">CEO</p>
                      <a href="" className="flex items-center justify-center px-4 h-10 font-bold bg-[#636B69] text-white rounded-full text-sm">Ver biograía</a>
                    </div>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto py-16 space-y-14">
          <nav className="flex items-center justify-between">
            <a href="" className="flex items-center space-x-4 font-bold text-[#407978] text-xl">
              <IconChevronDown className="[&_path]:fill-[#407978]" />
              <span>Architects</span>
            </a>
            <a href="" className="flex items-center space-x-4 font-bold text-[#636B69] text-xl">
              <IconChevronDown className="[&_path]:fill-[#636B69]" />
              <span>Interior Design & Specifications</span>
            </a>
            <a href="" className="flex items-center space-x-4 font-bold text-[#636B69] text-xl">
              <IconChevronDown className="[&_path]:fill-[#636B69]" />
              <span>Visual Design & MKT</span>
            </a>
            <a href="" className="flex items-center space-x-4 font-bold text-[#636B69] text-xl">
              <IconChevronDown className="[&_path]:fill-[#636B69]" />
              <span>Operaciones</span>
            </a>
          </nav>
          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {
              Array.from({ length: 12 }).map((_, index) => (
                <div>
                  <figure className="bg-stone-600 aspect-[0.96/1] w-full m-0 p-0 rounded-xl"></figure>
                  <div className="flex flex-col items-start py-3">
                    <h2 className="text-xl font-bold">Alejandro Arenas</h2>
                    <p className="pb-6">CEO</p>
                    <a href="" className="flex items-center justify-center px-4 h-10 font-bold bg-[#636B69] text-white rounded-full text-sm">Ver biograía</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}