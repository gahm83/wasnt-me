import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";
import CardPost from "@/app/components/molecules/card-post";
import SlideshowBios from "@/app/components/slideshow-bios";
import Image from "next/image";
import Link from "next/link";

export default function FormandoArquitectos() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-12">
          <div className="grid grid-cols-12">
            <div className="col-span-5 flex flex-col space-y-9">
              <nav className="flex items-center space-x-2 text-sm font-bold [&_a]:text-[#A1A1A1]">
                <Link href="/cultura-ares">Cultura Ares</Link>
                <IconArrowRight />
                <a href="">Formando arquitectos</a>
              </nav>
              <h2 className="text-5xl text-[#636B69] font-bold">Formando <br />arquitectos</h2>
            </div>
            <div className="col-span-7">
              <p>Impulsamos el poder de la enseñanza para formar mentes creativas y críticas, preservando la actividad del dibujo a mano alzada como un puente entre la tradición y la innovación, así como una forma de pensar y transformar espacios con propósito y autenticidad.</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto space-y-16 py-16">
          <div className="grid grid-cols-12 gap-y-6">
            <div className="col-span-7">
              <h1 className="text-5xl">Creemos en el poder de compartir conocimiento y experiencia para motivar a generaciones futuras</h1>
            </div>
            <div className="col-span-6 col-start-7 space-y-6">
              <p>Es un proceso inteligente que nos permite crear un modelo que, además de ser tridimensional, contenga la información necesaria para planificar, diseñar, construir y administrar edificios e infraestructura con más eficiencia.</p>
              <p>A lo largo de más de 20 años de trayectoria, hemos modelado más de 650,000 m. de proyectos en Revit, adquiriendo y desarrollando múltiples conocimientos especializados que nos permiten ofrecer una variedad de servicios basados en la metodología BIM a diversos sectores del dise.o, desarrollo y construcción. Además de nuestra experiencia en la metodología BIM, contamos con un amplio conocimiento en proyectos ejecutivos enfocados en desarrollos inmobiliarios de alto valor.</p>
              <p>Estas dos fortalezas no solo nos capacitan para modelar un proyecto, sino también para comprender los requerimientos técnicos que deben resolverse en cada uno de los proyectos que llevamos a cabo.</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[3.5/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto space-y-16 py-16">
          <div className="grid grid-cols-12">
            <div className="col-span-6 pr-14">
              <h1 className="text-5xl">Desarrollar una conexión directa con la realidad profesional</h1>
            </div>
            <div className="col-span-6 col-start-7 space-y-6">
              <p>En Ares Arquitectos, creemos en el poder de compartir conocimiento y experiencia para motivar a las futuras generaciones de arquitectos. Nos apasiona mantener viva la tradición del sketch como una herramienta esencial para la comprensión de un proyecto, que ayuda a comunicar la esencia de un espacio desde sus primeras líneas. Lo consideramos una forma de pensamiento visual que impulsa la creatividad y fomenta la claridad en la conceptualización arquitectónica abriendo la mente a las infinitas posibilidades del diseño.</p>
              <p>Trabajar en un equipo multidisciplinario nos inspira a compartir ideas, aprendiendo tanto de la experiencia como de nuevas visiones. Este espíritu colaborativo enriquece nuestro enfoque y mantiene viva la pasión por el diseño.</p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-16">
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>1</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Conceptualizar y desarrollar un pensamiento crítico</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>2</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Fomenta el trabajo colaborativo</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>3</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Aprender de las historias de éxito de los directores</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>4</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Conectar con los líderes de la industria</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] leading-none">
                <span>5</span>
              </h2>
              <p>Crecer y fortalecer su perfil profesional</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#F5F5F5] rounded-t-xl py-24 relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl">
          <div className="w-full max-w-[1150px] mx-auto">
            <div className="grid grid-cols-12 gap-x-6 gap-y-12">
              <div className="col-span-7">
                <figure className="m-0 p-0 w-full h-[440px] bg-stone-600 rounded-xl"></figure>
              </div>
              <div className="col-span-5">
                <figure className="m-0 p-0 w-full h-[440px] bg-stone-600 rounded-xl"></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

