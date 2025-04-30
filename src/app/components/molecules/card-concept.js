import IconExpand from "../atoms/icons/icon-expand";

export default function CardConcept({ isAlt = false }) {
  return (
    <article className={`space-y-3 ${ isAlt && "bg-[#F8F8F8] rounded-xl"}`}>
      <figure className={`m-0 p-0 rounded-xl h-[440px] ${ isAlt ? "bg-stone-600" : "bg-white"}`}></figure>
      <div className={`flex items-center justify-between ${ isAlt && "p-4"}`}>
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Merak</h2>
          <p className="text-xs">Carlos Marquez</p>
        </div>
        <IconExpand />
      </div>
    </article>
  );
}
