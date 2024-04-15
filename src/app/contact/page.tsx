import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page",
};

export default function ContactPage() {
  return (
    <div className="flex gap-24">
      <div className="hidden md:block relative flex-1">
        <Image src="/contact.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5">
          <input className="form-input-tailwind" type="text" placeholder="Name and Surname" name="name" />
          <input className="form-input-tailwind" type="text" placeholder="Email Address" name="email" />
          <input className="form-input-tailwind" type="text" placeholder="Phone Number(Optional)" name="phone" />
          <textarea
            placeholder="Message"
            name="message"
            rows={10}
            cols={10}
            className="form-input-tailwind"
          />
          <button className="form-button-tailwind">Send</button>
        </form>
      </div>
    </div>
  );
}
