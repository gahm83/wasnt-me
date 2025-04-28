import Image from "next/image";
import ProjectSlideshow from "./components/projectSlideshow";
import TagMarquee from "./components/tagMarquee";
import HeroHome from "./components/homeHero";
import StatsAndHeadquarters from "./components/statsHeadquarters";
import PrimaryButton from "./components/atoms/button";

import imageServicios from "../../public/image-servicios.jpg";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <StatsAndHeadquarters />
      <section className="">
        <div className="w-full max-w-[1150px] mx-auto py-16">
          <h2 className="text-5xl text-[#636B69] font-bold">Servicios</h2>
          <div className="grid grid-cols-2 mt-6">
            <dl className="pt-12 pr-24">
              <dt className="text-2xl font-bold text-[#407978]">Arquitectura</dt>
              <dd className="border-black/15 border-b py-8 mb-8">Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.</dd>
              <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                <span className="text-2xl font-bold">Master Planning</span>
              </dt>
              <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                <span className="text-2xl font-bold">Diseño de interiores</span>
              </dt>
              <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                <span className="text-2xl font-bold">Master Planning</span>
              </dt>
            </dl>
            <Image src={imageServicios} className="rounded-xl" alt="Dropdown Icon" />
          </div>
        </div>
      </section>
      <TagMarquee />
      <ProjectSlideshow tagList={true} />
      <section>
        <div className="w-full max-w-[1150px] mx-auto py-20 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-16">
            <h2 className="text-6xl"> Diseñemos de la mano espacios que trasciendan e historias que conectan</h2>
            <PrimaryButton link="Trabajemos Juntos" />
          </div>

        </div>
      </section>
    </main>
  );
}
