import PrimaryButton from "../atoms/button";

export default function CardBio({ schema = "normal"}) {
  const lightForeground = schema == "light";
  return (
    <article>
      <figure className="bg-stone-600 aspect-[0.96/1] w-full m-0 p-0 rounded-xl"></figure>
      <div className="flex flex-col items-start py-3">
        <h2 className="text-xl font-bold">Alejandro Arenas</h2>
        <p className="text-[#A1A1A1] pb-6">CEO</p>
        <a href="" className="flex items-center justify-center px-4 h-10 font-bold bg-[#636B69] text-white rounded-full text-sm">Ver biograía</a>
      </div>
    </article>
  );
}
