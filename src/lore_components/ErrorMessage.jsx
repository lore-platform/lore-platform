/* eslint-disable react/prop-types */
const ErrorMessage = ({ message }) => {
  return (
    <div className="text-xs border text-red-700 font-bold border-red-700 rounded-full bg-red-300 py-2 w-full text-center mt-2">
      {message}
    </div>
  );
};

export default ErrorMessage;
