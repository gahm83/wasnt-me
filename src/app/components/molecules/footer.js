'use client'
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-black py-12 rounded-t-lg text-white">
      <div className="w-full max-w-[1150px] mx-auto space-y-12">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h4 className="text-xl font-bold">Guadalajara HQ</h4>
            <div className="space-y-3 mt-6">
              <p>Av. Américas 1250, Planta Baja-B, San Miguel de la Colina, Zapopan, Jalisco, México, C.P. 45160</p>
              <p className="font-bold">Nombre pendiente</p>
              <p>(+52) 33 3642 2224</p>
              <p>info@aresarquitectos.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold">CDMX</h4>
            <div className="space-y-3 mt-6">
              <p>Insurgentes Sur 1079, Colonia del Valle Centro, Benito Juarez, Ciudad de, México, C.P. 03100</p>
              <p className="font-bold">Zyanya Quero</p>
              <p>(+52) 33 3642 2224</p>
              <p>cdmx@aresarquitectos.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold">L35 Barcelo﻿na</h4>
            <div className="space-y-3 mt-6">
              <p>Avda. Diagonal 466, 6ª planta 08006 BARCELONA</p>
              <p className="font-bold">Sonia Sanz</p>
              <p>(+34) 93 2922 299</p>
              <p>bcn@L35.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold">L35 M﻿adrid</h4>
            <div className="space-y-3 mt-6">
              <p>Plaza de la Marina Española, 3 28013 MADRID</p>
              <p className="font-bold">Alejandro Lorca</p>
              <p>(+ 34) 91 5474 96</p>
              <p>mad@L35.com</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Mapa de navegacion</h2>
          <div className="grid grid-cols-4 gap-12">
            <nav className="flex flex-col space-y-3 [&_a]:font-bold">
              <a href="">Proyectos</a>
              <a href="">El estudio</a>
              <a href="">Cultura ares</a>
              <a href="">Blog</a>
              <a href="">Contacto</a>
            </nav>
            <nav className="flex flex-col space-y-3 [&_a]:font-bold">
              <a href="">Usos Mixtos</a>
              <a href="">centros comerciales</a>
              <a href="">Vivienda</a>
              <a href="">Hoteles</a>
              <a href="">Master plan</a>
            </nav>
            <nav className="flex flex-col space-y-3 [&_a]:font-bold">
              <a href="">LATAM</a>
              <a href="">Retail</a>
              <a href="">Deportivo</a>
              <a href="">Movilidad</a>
              <a href="">Renovaciones y expansiones</a>
            </nav>
            <nav className="flex flex-col space-y-3 [&_a]:font-bold">
              <a href="">Instagram</a>
              <a href="">Facebook</a>
              <a href="">Linkedin</a>
              <a href="">Twitter</a>
            </nav>
          </div>
        </div>
        <nav className="grid grid-cols-4 gap-12 mt-16">
          <span>Ares 20﻿25 ©</span>
          <a href="">Uso de Cookies</a>
          <a href="">Aviso de privacidad</a>
        </nav>
      </div>
    </footer>
  );
}
