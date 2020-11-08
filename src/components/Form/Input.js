import { React, useEffect} from "react";
import { useField } from "@unform/core";
// useField API usada para conectar o Input com o Unform

function Input({ name }) {
  const { fieldName, registerField, defaultValue, error} = useField(name);

  useEffect(() => {

  }, []);

  return (
  
  <input 
    onChange={e => e.target.value}
  />)
}

export default Input;

//uncontrolled-form
//  não anotar os dados de um input enquanto o usuário digita