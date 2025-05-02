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
import ContactForm from "../components/molecules/contact-form";

export default function Contacto() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-12 space-y-12 ">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-5xl text-[#636B69] font-bold">Trabajemos <br />juntos</h2>
              <dl className="pt-12 pr-24">
                <dt className="text-2xl font-bold text-[#407978]">Asesoría de tu proyecto</dt>
                <dd className="border-black/15 border-b py-8 mb-8">Le mostraremos lo que hemos hecho y lo que podemos hacer por ustedes.</dd>
                <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                  <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                  <span className="text-2xl font-bold">Atención a provedores y acabados</span>
                </dt>
                <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                  <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                  <span className="text-2xl font-bold">Deja tu currículum</span>
                </dt>
              </dl>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1150px] mx-auto py-16 space-y-14">
          <h2 className="text-5xl text-[#636B69] font-bold">Nuestras oficinas</h2>
          <nav className="flex items-center justify-between">
            <a href="" className="flex items-center space-x-4 text-[#A1A1A1] text-xs">
              <IconChevronDown className="[&_path]:fill-[#0f2120]" />
              <div className="space-y-4">
                <h4 className="text-[#407978] font-bold text-[20px]">Guadalajara</h4>
                <p>México</p>
              </div>
            </a>
            <a href="" className="flex items-center space-x-4 text-[#A1A1A1] text-xs">
              <IconChevronDown className="[&_path]:fill-[#636B69]" />
              <div className="space-y-4">
                <h4 className="text-[#407978] font-bold text-[20px]">Guadalajara</h4>
                <p>México</p>
              </div>
            </a>
            <a href="" className="flex items-center space-x-4 text-[#A1A1A1] text-xs">
              <IconChevronDown className="[&_path]:fill-[#636B69]" />
              <div className="space-y-4">
                <h4 className="text-[#407978] font-bold text-[20px]">L35 Barcelona</h4>
                <p>España</p>
              </div>
            </a>
            <a href="" className="flex items-center space-x-4 text-[#A1A1A1] text-xs">
              <IconChevronDown className="[&_path]:fill-[#636B69]" />
              <div className="space-y-4">
                <h4 className="text-[#407978] font-bold text-[20px]">L35 Madrid</h4>
                <p>España</p>
              </div>
            </a>
          </nav>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 space-y-8">
              <p>Av. Américas 1250, Planta Baja-B, San Miguel de la Colina, Zapopan, Jalisco, México, C.P. 45160</p>
              <div className="space-y-4">
                <h2 className="font-bold">Nombre pendiente</h2>
                <p><a href="+523336422224">(+52) 33 3642 2224</a></p>
                <p><a href="info@aresarquitectos.com">info@aresarquitectos.com</a></p>
              </div>
            </div>
            <div className="col-span-9">
              <figure className="m-0 p-0 bg-stone-600 aspect-[2/1] rounded-xl"></figure>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}