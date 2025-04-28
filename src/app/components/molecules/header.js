'use client'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from "next/image";
import IconChevron from '../atoms/icons/icon-chevron';
import BrandLogo from '../atoms/icons/brand-logo';
import IconLanguage from '../atoms/icons/icon-language';


export default function Header() {
  const pathname = usePathname();
  const isHome = pathname == '/';

  useEffect(() => {
    console.log({ pathname });
  })

  return (
    <header className="flex items-center justify-between absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm w-full max-w-[1150px] h-[70px] rounded-full overflow-hidden px-4 font-bold shadow-lg">
      <BrandLogo className={isHome ? '[&_path]:fill-white' : '[&_path]:fill-[#5E6968]'} />
      <nav className={`flex items-center space-x-6 [&_a]:flex [&_a]:items-center ${ isHome ? '[&_a]:text-white' : '[&_a]:text-[#636B69] [&_a_svg_path]:fill-[#A1A1A1]' }`}>
        <a href="">
          <span>Proyectos</span>
          <IconChevron className={isHome ? "fill-[#DBDBDB]" : "fill-[#363B69]"}/>
        </a>
        <a href="">El estudio</a>
        <a href="">
          <span>Cultura Ares</span>
          <IconChevron className={isHome ? "fill-[#DBDBDB]" : "fill-[#363B69]"}/>
        </a>
        <a href="">Blog</a>
      </nav>
      <nav className="flex items-center space-x-6 [&_a]:flex [&_a]:items-center">
        <a href="" className={`flex items-center ${isHome ? 'text-white' : 'text-[#636B69]'}`}>
          <IconLanguage className={isHome ? '[&_g]:stroke-[#FFFFFF]' : '[&_g]:stroke-[#636B69]'} />
          <span className="block ml-2">ES</span>
          <IconChevron className={isHome ? "fill-[#DBDBDB]" : "fill-[#363B69]"}/>
        </a>
        <a href="" className={`px-6 py-3 rounded-full ${isHome ? 'bg-white text-black' : 'bg-[#636B69] text-white'}`}>Hablemos</a>
      </nav>
    </header>
  );
}
