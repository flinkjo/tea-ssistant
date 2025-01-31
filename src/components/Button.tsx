import { ButtonHTMLAttributes } from "react";

/* eslint-disable react/button-has-type */
interface Props {
  text: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick: () => void;
  isDisabled: boolean;
  name: string;
}

export default function Button({ text, type = "button", onClick, isDisabled, name }: Props) {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className="bg-gradient-to-r from-indigo-300 via-red-300 to-orange-300 block p-2 rounded-3xl drop-shadow-md text-center hover:drop-shadow-xl hover:-mt-px active:drop-shadow-none"
    >
      <div className="bg-stone-100 w-full h-full rounded-full px-5 py-3">
        <p className="text-indigo-400 text-4xl">{text}</p>
      </div>
    </button>
  );
}
