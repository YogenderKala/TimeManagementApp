import React, { useState } from "react";

function InputData({ value, type, setData , placeholder,min,max }) {
  return (
    <>
      <input
      className="mt-4 border-b-2 text-center"
        type={type}
        name=""
        id=""
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={(e) => setData(e.target.value)}
        required
      />
    </>
  );
}

export default InputData;
