import React, { useRef } from "react";

interface IInput {
    type: "number" | "text" | "email" | "password";
    placeholder: string;
    name: string;
    onChange: (name: string, value: string | number) => void;
}

export const Input= ({type, placeholder, name, onChange }: IInput): JSX.Element => {
    const ref = useRef(" ");
    const onChangeInput = ():void => {
        onChange(name, ref.current.value);
    }
    
    return (
        <input type={type} ref={ref} placeholder={placeholder} onChange={onChangeInput} value={ref.current.value}/>
    )
}
