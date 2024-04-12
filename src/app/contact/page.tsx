import Image from "next/image";

export default function ContactPage() {
  const inputStyling = "p-5 rounded border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]";
  return (
    <div className="flex gap-24">
      <div className="relative flex-1">
        <Image src="/contact.png" alt="" fill className="object-contain" />
      </div>
      {/* <div className="flex-1 relative">
        <Image src="/about.png" alt="" fill className="object-contain" />
      </div> */}
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5">
          <input className={inputStyling} type="text" placeholder="Name and Surname" name="name" />
          <input className={inputStyling} type="text" placeholder="Email Address" name="email" />
          <input className={inputStyling} type="text" placeholder="Phone Number(Optional)" name="phone" />
          <textarea
            placeholder="Message"
            name="message"
            rows={10}
            cols={10}
            className={inputStyling}
          />
          <button className="p-4 bg-[var(--btn)] text-[var(--text)] font-bold border-none rounded">Send</button>
        </form>
      </div>
    </div>
  );
}
