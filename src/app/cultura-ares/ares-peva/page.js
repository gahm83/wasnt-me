import ProjectSlideshow from "../../components/projectSlideshow";
import FooterHero from "../../components/molecules/hero-footer";
import TagList from "../../components/molecules/tag-list";
import IconSearch from "../../components/atoms/icons/icon-search";
import IconSort from "@/app/components/atoms/icons/icon-sort";
import Card from "@/app/components/molecules/card-project";
import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";
import CardConcept from "@/app/components/molecules/card-concept";
import SlideshowConcepts from "@/app/components/slideshow-concepts";

export default function Peva() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-12 ">
          <div className="grid grid-cols-12">
            <div className="col-span-5 flex flex-col space-y-9">
              <nav className="flex items-center space-x-2 text-sm font-bold [&_a]:text-[#A1A1A1]">
                <a href="">Cultura ARES</a>
                <IconArrowRight />
                <a href="">Ares PEVA</a>
              </nav>
              <h2 className="text-5xl text-[#636B69] font-bold">Pensando <br/>En Voz Alta</h2>
            </div>
            <div className="col-span-7">
              <p>Es una iniciativa de Ares Arquitectos que busca incentivar el dibujo a mano alzada entre profesionales y estudiantes de cualquier oficio que implique un trabajo creativo. Mostraremos dibujos de diferentes colaboradores del equipo realizados a lo largo de más de 40 años de experiencia profesional.</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto">
          <div className="grid grid-cols-12 py-16">
            <div className="col-span-7">
              <h1 className="text-5xl">El dibujo es el primer paso en la creación de una narrativa visual que da vida a un espacio</h1>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto">
          <div className="grid grid-cols-2 gap-16 py-16">
            <div className="">
              <h1 className="text-5xl">Ares <br />Archivos de Arquitectura</h1>
            </div>
            <div className="space-y-6">
              <p>El diseño es un proceso en el cual se conciben ideas, se visualizan, se representan, se descartan algunas y otras se desarrollan para entender el potencial de cada una de éstas, hasta así llegar a una solución final. En el transcurso de todos estos pasos, se generan un sin fin de esquemas, diagramas, dibujos y anotaciones, que expresan todas aquellas ideas que provienen de un pensamiento colectivo de un equipo de trabajo diverso.</p>
              <p>El dibujo a mano alzada, es la forma de expresión que más rápidamente plasma en una imagen lo que nuestra mente ha visualizado como una idea, es el primer lenguaje con el que se da forma a un concepto, permitiendo explorar, comunicar y construir un mundo de posibilidades.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#F5F5F5] rounded-t-xl py-24 relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl">
          <div className="w-full max-w-[1150px] mx-auto">
            <div className="grid grid-cols-12 gap-x-6 gap-y-12">
              <div className="col-span-7">
                <CardConcept />
              </div>
              <div className="col-span-5">
                <CardConcept />
              </div>
              <div className="col-span-12">
                <CardConcept />
              </div>
              <div className="col-span-5">
                <CardConcept />
              </div>
              <div className="col-span-7">
                <CardConcept />
              </div>
              <div className="col-span-12">
                <CardConcept />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SlideshowConcepts />
    </main>
  );
}