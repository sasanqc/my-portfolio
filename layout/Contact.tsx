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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
    setIsLoading(false);
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

        <div className=" flex justify-end items-center">
          {isLoading && (
            <div role="status mr-5">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray animate-spin  fill-black1"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentfill"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentcolor"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <Button onClick={handleSubmitForm} disable={isLoading}>
            send message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
