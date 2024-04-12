import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-[var(--btn)]">About Agency</h2>
        <h1 className="text-5xl">We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className="text-xl">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--btn)] text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--btn)] text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--btn)] text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/about.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
