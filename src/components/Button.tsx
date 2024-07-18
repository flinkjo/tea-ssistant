interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick: () => void;
  isDisabled: boolean;
  name: string;
}

function Button(props: ButtonProps) {
  const { text, type, onClick, isDisabled, name } = props;

  return (
    <button
      name={name}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className="bg-gradient-to-r from-indigo-300 via-red-200 to-orange-200 block p-2 rounded-full drop-shadow-md text-center hover:drop-shadow-xl hover:-mt-px active:drop-shadow-none"
    >
      <div className="bg-stone-100 w-full h-full rounded-full px-5 py-3">
        <p className="text-indigo-400 text-4xl">{text}</p>
      </div>
    </button>
  );
}

export default Button;
