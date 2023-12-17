import { useState } from "react";

const InputField = ({ name, type, placeholder, icon }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="input-container mb-2 md:w-full">
      <a className={"input-icon inline-block text-base" + " " + icon}></a>
      <input
        className={"input focus:rounded-lg" + " " + (type === "date" ? "input-date" : "")}
        name={name}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default InputField;