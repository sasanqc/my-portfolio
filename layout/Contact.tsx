import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
interface ImperativeInput {
  error: (message: string) => void;
}
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef<ImperativeInput>(null);
  const emailRef = useRef<ImperativeInput>(null);
  const messageRef = useRef(null);
  const [messageError, setMessageError] = useState("");
  const handleSubmitForm = async (e: React.MouseEvent) => {
    e.preventDefault();
    //validate email
    if (
      email.trim().length === 0 ||
      email.trim().length <= 3 ||
      !email.includes("@") ||
      email.startsWith("@")
    ) {
      emailRef.current?.error("Sorry, invalid format here");
      return;
    }

    if (message.trim().length === 0) {
      setMessageError("Can't be empty");
      return;
    }
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      toast.success("Successfully created!");
    } catch (error) {
      toast.error("Sorry,couldn't submit your message!");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row pt-16 sm:pt-20 justify-between gap-x-10 pb-24 border-b border-b-gray"
    >
      <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
        <h1 className=" mb-9 text-xlm sm:text-xlt lg:text-xl">Contact</h1>
        <p className="text-base text-gray lg:max-w-[445px]">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form className="space-y-8 flex-1">
        <TextInput
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName((e.target as HTMLInputElement).value)
          }
          value={name}
          ref={nameRef}
          placeholder="NAME"
        />
        <TextInput
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail((e.target as HTMLInputElement).value)
          }
          value={email}
          ref={emailRef}
          placeholder="EMAIL"
        />
        <div className="relative">
          <textarea
            className={`resize-none pb-4 pl-6 w-full placeholder:text-white placeholder:opacity-50 outline-none bg-[transparent] border-b-[1px] text-[16px] leading-[26px] focus:border-b-green  ${
              false ? "border-b-red" : "border-b-gray"
            } `}
            rows={5}
            placeholder="MESSAGE"
            value={message}
            ref={messageRef}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
              setMessageError("");
              setMessage((e.target as HTMLTextAreaElement).value);
            }}
          ></textarea>
          {messageError && (
            <div className="absolute  text-[12px] right-0 text-red text-base font-spaceGrotesk bottom-[-30px]">
              {messageError}
            </div>
          )}
        </div>

        <div className=" flex justify-end ">
          <Button onClick={handleSubmitForm}>send message</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
