import { React, useEffect, useRef } from "react";
import { useField } from "@unform/core";
// useField API usada para conectar o Input com o Unform

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value", // prop que contém o valor do input dentro da ref
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />{" "}
      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </div>
  );
}

export default Input;

//uncontrolled-form
//  não anotar os dados de um input enquanto o usuário digita
