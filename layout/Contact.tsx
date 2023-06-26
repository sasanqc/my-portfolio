import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row pt-20 justify-between gap-x-10 pb-24 border-b border-b-gray">
      <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
        <h1 className="mb-9">Contact</h1>
        <p className="text-base text-gray lg:max-w-[445px]">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form className="space-y-8 flex-1">
        <TextInput onChange={() => {}} value="" placeholder="NAME" />
        <TextInput onChange={() => {}} value="" placeholder="EMAIL" />
        <textarea
          className={`resize-none pb-4 pl-6 w-full placeholder:text-white placeholder:opacity-50 outline-none bg-[transparent] border-b-[1px] text-[16px] leading-[26px] focus:border-b-green  ${
            false ? "border-b-red" : "border-b-gray"
          } `}
          rows={5}
          placeholder="MESSAGE"
        ></textarea>
        <div className=" flex justify-end">
          <Button onClick={() => {}}>send message</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
