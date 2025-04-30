import Link from "next/link";

export default function IconArrowRight({className, isAlt = false}) {

  return (
    <span className="flex items-center justify-center w-4 h-4">
      {
        isAlt
        ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="#A1A1A1" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="#A1A1A1" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m268 112l144 144l-144 144m124-144H100"/></svg>
      }
    </span>
  );
}
