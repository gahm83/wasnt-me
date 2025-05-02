'use client'
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("nombre")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <fieldset className="flex flex-col items-stretch space-y-2">
        <label className="text-sm" htmlFor="nombre">Nombre completo <span className="text-[#EE3F3F]">*</span></label>
        <input
          className="w-full h-12 border border-black/15 rounded-xl"
          {...register("nombre", { required: true })} />
        {errors.nombre && <span>This field is required</span>}
      </fieldset>
      <fieldset className="flex flex-col items-stretch space-y-2">
        <label className="text-sm" htmlFor="email">Correo electrónico <span className="text-[#EE3F3F]">*</span></label>
        <input
          className="w-full h-12 border border-black/15 rounded-xl"
          {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </fieldset>
      <fieldset className="flex flex-col items-stretch space-y-2">
        <label className="text-sm" htmlFor="telefono">Teléfono <span className="text-[#EE3F3F]">*</span></label>
        <input
          className="w-full h-12 border border-black/15 rounded-xl"
          {...register("telefono", { required: true })} />
        {errors.telefono && <span>This field is required</span>}
      </fieldset>
      <fieldset className="flex flex-col items-stretch space-y-2">
        <label className="text-sm" htmlFor="telefono">Empresa</label>
        <input
          className="w-full h-12 border border-black/15 rounded-xl"
          {...register("empresa")} />
      </fieldset>
      <fieldset className="flex flex-col items-stretch space-y-2">
        <label className="text-sm" htmlFor="telefono">Su mensaje</label>
        <textarea
          className="w-full h-24 border border-black/15 rounded-xl resize-none"
          {...register("mensaje")}></textarea>
      </fieldset>
      <button type="submit" className="bg-[#636B69] flex justify-center w-full px-6 py-3 rounded-full text-white font-bold">Enviar</button>
    </form>
  );
}