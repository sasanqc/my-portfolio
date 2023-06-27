import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface TextInputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

interface ImperativeInput {
  error: (message: string) => void;
}

const TextInput = forwardRef<ImperativeInput, TextInputProps>(
  ({ label, id, name, placeholder, value, onChange }, ref) => {
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      error: (message: string) => {
        setError(message);
      },
    }));

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (error) {
        setError("");
      }
      onChange(e);
    };
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-gray3 text-sm font-bold"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type="text"
            name={name}
            id={id}
            value={value}
            ref={inputRef}
            className={`pb-4 pl-6 w-full placeholder:text-white placeholder:opacity-50 outline-none bg-[transparent] border-b-[1px] text-[16px] leading-[26px] focus:border-b-green  ${
              error ? "border-b-red" : "border-b-gray"
            } `}
            placeholder={placeholder}
            onChange={handleChange}
            required
          />
          {error && (
            <div className="absolute  text-[12px] right-0 text-red text-base font-spaceGrotesk bottom-[-30px]">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }
);
TextInput.displayName = "TextInput";
export default TextInput;
