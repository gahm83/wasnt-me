import IconExpand from "../atoms/icons/icon-expand";

export default function CardInitiative() {
  return (
    <article className="bg-[#F8F8F8] rounded-xl">
      <figure className="m-0 p-0 rounded-xl h-[440px] bg-stone-600"></figure>
      <div className="flex items-center justify-between p-4">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Ares PEVA</h2>
          <p className="text-xs">Pensando en voz alta</p>
        </div>
        <a href="" className="flex items-center justify-center px-4 h-10 font-bold bg-[#636B69] text-white rounded-full text-sm">Ver iniciativa</a>
      </div>
    </article>
  );
}
