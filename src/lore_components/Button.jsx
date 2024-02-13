/* eslint-disable react/prop-types */

const Button = ({ title, onClick, className }) => {
  return (
    <button
      className={`lore-text-n800 w-fit py-1.5 px-6 rounded-full ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
