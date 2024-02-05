/* eslint-disable react/prop-types */
const FormTextBox = ({ labelText, id, name, type, onChange, onKeyDown}) => (
  <>
    <div className="FormTextBox-container flex flex-col gap-y-2 w-full">
      <label htmlFor={id} className="text-sm pl-4">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        className="lorebg-n700 py-2 px-5 rounded-full text-sm"
        onKeyDown={onKeyDown}
      />
    </div>
  </>
);
export default FormTextBox;
