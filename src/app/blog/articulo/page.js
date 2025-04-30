import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";
import SlideshowBios from "@/app/components/slideshow-bios";
import Image from "next/image";
import Link from "next/link";

export default function Bio() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[1150px] mx-auto pt-48 pb-12 space-y-16">
          <nav className="flex items-center space-x-2 text-sm font-bold [&_a]:text-[#A1A1A1]">
            <IconArrowRight isAlt />
            <Link href="/el-estudio">El Estudio</Link>
          </nav>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col space-y-12 ">
              <div>

                <h2 className="text-5xl text-[#636B69] font-bold">Jacinto Arenas</h2>
                <p className="text-[#A1A1A1]">CEO</p>
              </div>
              <div className="space-y-6">
                <p>Jacinto Arenas ha llevado a cabo su desarrollo profesional en Ares Arquitectos, firma especializada en el diseño arquitectónico y de interiores de géneros como centros comerciales, usos mixtos, hoteles, vivienda vertical y espacios de retail entre otros.</p>
                <p>Bajo su dirección, Ares Arquitectos se ha convertido en una de las empresas líderes del ramo de la arquitectura en México, además de haber realizado proyectos en 14 países.</p>
                <p>Ares ha recibido en 6 ocasiones el ICSC Latin America Shopping Center Awards, en otras tres ha sido galardonado con el premio CIDI de Interiorismo, además de haber recibido el reconocimiento “INSPIRA” Trayectorias 2013 de la revista México Design.</p>
                <h2 className="text-2xl text-[#636B69] font-bold">Directores</h2>
                <p>Es arquitecto egresado del Instituto de Estudios Superiores de Occidente (ITESO), además de contar con la maestría “Executive MBA” impartida por la escuela de negocios IPADE y el “Diplomado en Evaluación y Formulación de Proyectos de Inversión” de la Universidad Panamericana de Guadalajara</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-8">
              <figure className="w-full aspect-square m-0 p-0 bg-stone-600 rounded-xl"></figure>
              <nav className="flex space-x-4 text-xs [&_a]:text-[#636B69] [&_a]:font-bold">
                <a href="">Instagram</a>
                <a href="">Linkedin</a>
                <a href="">Facebook</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <SlideshowBios />
    </main>
  );
}