import ProjectSlideshow from "../../components/projectSlideshow";
import FooterHero from "../../components/molecules/hero-footer";
import TagList from "../../components/molecules/tag-list";
import IconSearch from "../../components/atoms/icons/icon-search";
import IconSort from "@/app/components/atoms/icons/icon-sort";
import Card from "@/app/components/molecules/card-project";
import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";

export default function Home() {
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
              </nav>
              <h2 className="text-5xl text-[#636B69] font-bold">Usos Mixtos</h2>
            </div>
            <div className="col-span-7">
              <p>La integración física y funcional de espacios residenciales, comerciales, culturales y de transporte, diseñados para crear entornos equilibrados y dinámicos que fomentan la convivencia, la movilidad eficiente y el desarrollo sotenible.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full">
        </div>
        <div className="bg-white -mt-3 rounded-t-xl">
          <div className="w-full max-w-[1150px] mx-auto">
            <div className="grid pt-20 pb-12">
              <div className="col-span-8">
                <h2 className="text-5xl">Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida</h2>
              </div>
            </div>
            <div className="space-y-12">

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
              <div className="grid grid-cols-2 gap-6">
                {
                  Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}