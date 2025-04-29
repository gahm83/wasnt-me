import PrimaryButton from "../atoms/button";

export default function Card({ schema = "normal"}) {
  const lightForeground = schema == "light";
  return (
    <div className={`${lightForeground ? 'bg-white' : 'bg-[#F8F8F8]'} rounded-xl`}>
      <figure className="aspect-video bg-black w-full rounded-xl">
      </figure>
      <div className="flex flex-col gap-8 p-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">Averanda</h2>
            <p>Cuernavaca, Morelos</p>
          </div>
          <PrimaryButton link="Ver proyecto" />
        </div>
        <div className="flex">
          <a href="" className="block border border-black/15 py-1.5 px-4 rounded-full text-xs font-bold">Usos Mixtos</a>
        </div>
      </div>
    </div>
  );
}
