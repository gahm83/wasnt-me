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
                <a href="">DIS</a>
              </nav>
              <h2 className="text-5xl text-[#636B69] font-bold">Diseño <br />sostenible</h2>
            </div>
            <div className="col-span-7">
              <p>Integramos Digital Innovation & Sustainability (DIS) en nuestros procesos, utilizando tecnología BIM para optimizar el diseño, la construcción y la gestión de proyectos. Esto nos permite no solo crear espacios funcionales y estéticamente impactantes, sino también sostenibles y eficientes.</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto space-y-16 py-16">
          <div className="grid grid-cols-12 gap-y-6">
            <div className="col-span-7">
              <h1 className="text-5xl">
                <span className="block">DIS</span>
                <span className="block">Digital Innovation</span>
                <span className="block">& Sustainability</span>
              </h1>
            </div>
            <div className="col-span-6 col-start-7 space-y-6">
              <p>Este concepto en Arquitectura hace referencia a la integración de tecnologías digitales innovadoras con prácticas sostenibles, con el objetivo de mejorar la eficiencia, reducir el impacto ambiental y optimizar el proceso de diseño y construcción; impulsar soluciones que aborden desafíos ecológicos y fomenten un crecimiento responsable.</p>
              <p>Como equipo, creemos en el poder de la tecnología así como el uso de la Inteligencia Artificial para transformar ideas en realidades tangibles que respeten el entorno y mejoren la vida de las personas.</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[3.5/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto space-y-16 py-16">
          <div className="grid grid-cols-12">
            <div className="col-span-6 pr-14">
              <h1 className="text-5xl">
                <span className="block">BIM</span>
                <span className="block">Building Information</span>
                <span className="block">Modeling</span>
              </h1>
            </div>
            <div className="col-span-6 col-start-7 space-y-6">
              <p>En Ares Arquitectos, creemos en el poder de compartir conocimiento y experiencia para motivar a las futuras generaciones de arquitectos. Nos apasiona mantener viva la tradición del sketch como una herramienta esencial para la comprensión de un proyecto, que ayuda a comunicar la esencia de un espacio desde sus primeras líneas. Lo consideramos una forma de pensamiento visual que impulsa la creatividad y fomenta la claridad en la conceptualización arquitectónica abriendo la mente a las infinitas posibilidades del diseño.</p>
              <p>Trabajar en un equipo multidisciplinario nos inspira a compartir ideas, aprendiendo tanto de la experiencia como de nuevas visiones. Este espíritu colaborativo enriquece nuestro enfoque y mantiene viva la pasión por el diseño.</p>
            </div>
          </div>
          <div className="flex justify-between gap-12">
            <div className="flex flex-col space-y-3 flex-shrink-0">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>1</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Documentos de <br />construcción</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>2</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Trabajo colaborativo y control de documentos con BIM 360</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>3</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Realidad Virtual (VR) y Realidad Aumentada (AR)</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-8xl text-[#989F9C] flex items-center space-x-2 leading-none">
                <span>4</span>
                <span className="text-4xl -mt-6 font-bold">→</span>
              </h2>
              <p>Modelado de proyectos de ingeniería y detección de interferencias</p>
            </div>
            <div className="flex flex-col space-y-3 flex-shrink-0">
              <h2 className="text-8xl text-[#989F9C] leading-none">
                <span>5</span>
              </h2>
              <p>Predicción <br />y análisis</p>
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

