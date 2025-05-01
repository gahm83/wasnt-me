import IconArrowRight from "@/app/components/atoms/icons/icon-arrow-right";
import CardInitiative from "../components/molecules/card-initiative";

export default function CulturaAres() {
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
                <IconArrowRight />
                <a href="">Averanda</a>
              </nav>
              <h2 className="text-5xl text-[#636B69] font-bold">Cultura <br />Ares</h2>
            </div>
            <div className="col-span-7">
              <p>Creemos en la fusión de la creatividad, la enseñanza y la innovación tecnológica. Nuestra cultura se basa en el compromiso de explorar nuevas formas de pensar, diseñar y crear, promoviendo una visión arquitectónica que trasciende generaciones.</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-600 aspect-[1.48/1] max-h-[768px] rounded-t-xl w-full relative before:absolute before:bottom-0 before:block before:content-[''] before:w-full before:h-3 before:bg-white before:rounded-t-xl"></div>
        <div className="w-full max-w-[1150px] mx-auto space-y-16 py-16">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h1 className="text-5xl">La tradición de la mano alzada, la enseñanza como legado de conocimiento y la innovación digital</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
          {
            Array.from({ length: 3 }).map((_, index) => <CardInitiative key={index} />)
          }
          </div>
        </div>
      </section>
    </main>
  );
}

