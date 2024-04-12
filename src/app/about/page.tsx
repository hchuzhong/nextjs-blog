import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className="relative w-full h-[500px]">
        <Image src="https://images.pexels.com/photos/12704502/pexels-photo-12704502.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="About page" fill />
      </div>
    </div>
  );
}
