import PrimaryButton from "../atoms/button.js";

export default function FooterHero({text="Convierte tus ideas en espacios que dejan huella."}) {
  return (
    <section>
      <div className="w-full max-w-[1150px] mx-auto py-20 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-16">
          <h2 className="text-6xl text-center">{text}</h2>
          <PrimaryButton link="Trabajemos Juntos" />
        </div>
      </div>
    </section>
      
  );
}
