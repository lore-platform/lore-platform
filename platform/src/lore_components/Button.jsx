/* eslint-disable react/prop-types */

const Button = ({ title, onClick }) => {
  return (
    <button
      className="bg-white hover:bg-gray-300 lore-text-n800 w-fit py-1.5 px-6 rounded-full"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
