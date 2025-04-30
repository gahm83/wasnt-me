import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";
import CardPost from "@/app/components/molecules/card-post";
import SlideshowBios from "@/app/components/slideshow-bios";
import Image from "next/image";
import Link from "next/link";

export default function Bio() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-16 ">
          <div className="space-y-9">
            <nav className="flex items-center space-x-2 text-sm font-bold [&_a]:text-[#A1A1A1]">
              <IconArrowRight isAlt />
              <Link href="/blog">Blog</Link>
            </nav>
            <h2 className="text-5xl text-[#636B69] font-bold  max-w-4xl">Desarrollos de Usos Mixtos: Integradores de comunidades</h2>
            <h4 className="text-3xl text-[#A1A1A1] font-bold mb-12">Agosto 2024</h4> 
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto py-16">
          <div className="w-7/12 space-y-4">
            <p>En un contexto de urbanización acelerada, los desarrollos de usos mixtos se perfilan como una solución esencial para optimizar el uso del suelo y mejorar la calidad de vida urbana. Al integrar espacios comerciales, residenciales y de oficinas en un entorno cohesivo, estos proyectos no solo generan comunidades sostenibles y dinámicas, sino que también maximizan la eficiencia territorial reduciendo la necesidad de largos desplazamientos.</p>
            <p>Más allá de optimizar el uso del terreno, los desarrollos de usos mixtos impulsan el crecimiento de las economías locales, casi de barrio, beneficiando a su comunidad inmediata. Si estos proyectos se desarrollan de manera inteligente, se generan distritos atractivos y vibrantes brindando a sus usuarios un entorno lleno de lugares que cubren la mayoría de sus necesidades y que están a tiro de piedra.</p>
            <p>La incorporación de tecnología a todos los niveles y diferentes soluciones de sostenibilidad energética son cada vez más un común denominador en este tipo de proyectos, asegurando que todo el entorno no solo sea funcional sino también que sea responsivo a una comunidad emergente, cada vez más habitudo a estar vinculado con soluciones digitales y cada vez más consciente del cuidado de los recursos naturales.</p>
            <p>Todo lo anterior no son solamente más amenidades sino que se han vuelto un gran diferenciador para quienes quieren vivir o rentar en estos lugares y que inclinan la balanza para su selección. Este enfoque de planificación más consciente abona a construir entornos que favorezcan tanto el bienestar de las personas y la prosperidad de las comunidades en las que se insertan estos proyectos.</p>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto py-16">
          <div className="w-7/12 space-y-4">
            <p>Averanda fue Diseñado por Ares Arquitectos en colaboración con Proarquitectura, empresa desarrolladora de este proyecto ubicado en Cuernavaca, que integra un centro comercial con distintas marcas nacionales e internacionales de renombre, además, varias torres residenciales 2 hoteles y un edificio de suites, creando un entorno único en un espacio al aire libre.</p>
            <p>El principal reto fue optimizar cada espacio entendiendo la gran escala del proyecto pero tambien cuidando los pequeños detalles, para crear un entorno fresco con una atmósfera única que perdure y trascienda su tiempo, mejorando la experiencia y calidad de vida a sus usuarios. Nuestro proyecto ha sido reconocido como el mejor proyecto inmobiliario de México en 2023 por la Asociación de Desarrolladores Inmobiliarios de México (ADI) , y ha obtenido el Premio Oro en los Latin America & Caribbean Shopping Center Awards, un prestigioso galardón internacional en la industria de centros comerciales otorgado por el Internacional Council of Shopping Centers (ICSC por sus siglas en inglés).</p>
            <p>Averanda no solo es un ejemplo de integración eficiente, sino que también establece un nuevo estándar en la creación de espacios que combinan lo comercial, residencial y recreativo, ofreciendo una experiencia inigualable en la región.</p>
          </div>
        </div>
        <div className="space-y-12">
          <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
          <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        </div>
        <div className="w-full max-w-[1150px] mx-auto py-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6 space-y-4">
              <h2 className="text-xl text-[#A1A1A1] font-bold">Elaborado por</h2>
              <div className="w-1/3 space-y-4">
                <figure className="m-0 p-0 w-full aspect-square bg-stone-600 rounded-xl"></figure>
                <div>
                  <h2 className="text-base font-bold">Jacinto Arenas</h2>
                  <h4 className="text-xs text-[#A1A1A1]">CEO</h4>
                </div>
              </div>
              
            </div>
            <div className="col-span-3 space-y-4">
              <h2 className="text-xl text-[#A1A1A1] font-bold">Involucrados</h2>
              <ul className='space-y-1'>
                <li>Marlene García</li>
                <li>Belén Coronado</li>
                <li>Lourdes Barba</li>
                <li>Ulises Rivera</li>
                <li>Fernando Ayala</li>
              </ul>
            </div>
            <div className="col-span-3 space-y-4">
              <h2 className="text-xl text-[#A1A1A1] font-bold">Mercados relacionados</h2>
              <ul className='space-y-1'>
                <li>Centros Comerciales</li>
                <li>Retail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto py-16 space-y-12">
          <h2 className="text-5xl text-[#636B69] font-bold">Articulos relacionados</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {
            Array.from({ length: 4 }).map((_, index) => <CardPost />)
          }
          </div>
        </div>
      </section>
    </main>
  );
}