import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-5xl md:text-6xl">Creative Thoughts Agency.</h1>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-5">
          <button className="p-4 min-w-28 border-none rounded bg-[var(--btn)] text-[var(--text)]">Learn More</button>
          <button className="p-4 min-w-28 border-none rounded bg-[var(--text)] text-[var(--bg)]">Contact</button>
        </div>
        <div className="relative w-[400px] h-12 grayscale">
          <Image src="/brands.png" alt="" fill className=""/>
        </div>
      </div>
      <div className="hidden md:block flex-1 relative">
        <Image src="/hero.gif" alt="" fill className=""/>
      </div>
    </div>
  );
}
