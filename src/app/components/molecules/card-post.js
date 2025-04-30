import PrimaryButton from "../atoms/button";

export default function CardPost() {
  return (
    <article className="flex items-stretch justify-stretch">
      <figure className="m-0 p-0 w-full h-full bg-stone-600 rounded-xl"></figure>
      <div className="flex flex-col items-start justify-between p-4 space-y-8">
        <div className="space-y-2">
          <h4 className="text-[#A1A1A1] text-xs">Mayo 2004</h4>
          <h3 className="text-[#636B69] text-xl leading-none font-bold">Reconversión de los Centros Comerciales: Una experiencia análoga en un mundo digital.</h3>
        </div>
        <a href="" className="flex items-center bg-[#EFEFEF] rounded-full font-bold text-sm h-10 px-4">Continuar Leyendo</a>
        
      </div>
    </article>
  );
}
