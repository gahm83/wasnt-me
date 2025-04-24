



import PrimaryButton from "./atoms/button";

export default function StatsAndHeadquarters() {
  return (
    <section className="bg-world-map bg-center bg-no-repeat py-24">
      <div className="w-full max-w-[1150px] mx-auto">
        <div className="grid grid-cols-5 items-start">
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">50</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Años de experiencia</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">16</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Paises</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">4</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Millones de m² diseñados</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">11</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Premios</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">110</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Proyectos en México y LATAM</p>
          </div>
        </div>
        <div className="aspect-video flex items-center justify-center">
          <h2 className="text-8xl text-center">Experiencia global, enfoque local</h2> 
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-black font-bold text-[20px]">Guadalajara</h4>
            <p>México</p>
          </div>
          <div>
            <h4 className="text-black font-bold text-[20px]">Guadalajara</h4>
            <p>México</p>
          </div>
          <div>
            <h4 className="text-black font-bold text-[20px]">L35 Barcelona</h4>
            <p>España</p>
          </div>
          <div>
            <h4 className="text-black font-bold text-[20px]">L35 Madrid</h4>
            <p>España</p>
          </div>
        </div>
        <div className="flex items-center mt-10">
          <a href="" className="bg-[#636B69] text block px-6 py-3 rounded-full text-white font-bold">Conoce El estudio</a>
        </div>
      </div>
    </section>
  );
}
