import Image from "next/image";
import SectionTitle from "../components/atoms/sectionTitle";
import ProjectSlideshow from "../components/projectSlideshow";
import FooterHero from "../components/molecules/hero-footer";
import TagList from "../components/molecules/tag-list";
import IconSearch from "../components/atoms/icons/icon-search";

export default function Home() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-12 space-y-12">
          <h2 className="text-5xl text-[#636B69] font-bold w-1/2">Explora nuestros proyectos</h2>
          <div className="w-full h-12 border border-black/15 rounded-full flex justify-between">
            <IconSearch />
            <input type="text" className="bg-transparent appearance-none grow outline-none pr-4"/>
          </div>
          <TagList />
        </div>
      </section>
      <ProjectSlideshow title="Usos Mixtos" isChild />
      <ProjectSlideshow title="Hoteles" isChild />
      <ProjectSlideshow title="Vivienda" isChild />
      <ProjectSlideshow title="Centros comerciales" isChild />
      <FooterHero text="Transformemos en conjunto las ideas en diseños que trasciendan" />
    </main>
  );
}