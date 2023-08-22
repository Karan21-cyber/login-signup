"use client"
import { useState } from "react";
import {Path, UseFormRegister } from "react-hook-form";
import { BsEye } from "react-icons/bs";

interface ILabel {
  "username"?:string,
  "email":string,
  "password":string,
}

type InputType = {
 type:string,
 placeholder:string,
 label:Path<ILabel>,
 register:any,
}

function Input({type,placeholder,label,register }: InputType) {
  const [inputType , setType] = useState<string | "text">(type);
  
  return (
    <div className="input-field flex flex-col gap-2">
      <label className="input-label text-gray-label text-xs font-normal ">
        {label.toUpperCase()}
      </label>
      <div className="flex justify-between border-b">
        <input
          className="input-box w-full outline-none  text-base mb-1 font-normal"
          placeholder={placeholder}
          type={inputType}
          {...register(label)}
        />
        {inputType === "password" ? (
          <BsEye size={16} className="text-gray-label cursor-pointer" onClick={() => setType("text")}/>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Input;
