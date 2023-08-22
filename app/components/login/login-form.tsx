"use client";
import Input from "../common/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "@/utils/signup/action";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../../atoms/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().required("Email is required").email("Email is Invalid"),
  password: yup
    .string().required("Password is required")
    .test(
      "password",
      "Password must contain a capital letter",
      (value) => /[A-Z]/.test(value || "")
    )
    .test(
      "password",
      "Password must contain a small letter",
      (value) => /[a-z]/.test(value || "")
    )
    .test(
      "password",
      "Password must contain a number",
      (value) => /[0-9]/.test(value || "")
    )
    .test(
      "password",
      "Password must contain a special character",
      (value) => /[!@#$%^&*]/.test(value || "")
    )
    .test(
      "password",
      "Password must be at least 8 characters long",
      (value) => (value || "").length >= 8
    ),
}).required();


type FormData = yup.InferType<typeof schema>;

function Login() {

  const [error , setError] = useState<string |undefined >('')
  const router = useRouter();
  const [text, setText] = useRecoilState(loginAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const result = getCookie(data?.email);

    if (result !== null) {
      const resultObject = JSON.parse(result); // Assuming the cookie value is a JSON string
      if (
        data?.email === resultObject?.email &&
        data?.password === resultObject?.password
      ) {
        setText(resultObject?.username);
        router.push("/");
      }else{
        setError("Email and Password doesn't Found");
      }
    } else {
      console.log("Cookie not found or invalid.");
    }
  };

  return (
    <form
      className="formFields-conainer flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
       {error && (
        <p className="errors text-[12px] text-red-700">
          {error}
        </p>
      )}
      <Input
        type="email"
        placeholder="Enter Email"
        label="email"
        register={register}
      />
      {errors?.email && (
        <p className="errors text-[10px] text-red-700">
          {errors?.email?.message}
        </p>
      )}
      <Input
        type="password"
        placeholder="Enter Password"
        label="password"
        register={register}
      />
      {errors?.password && (
        <p className="errors text-[10px] text-red-700">
          {errors?.password?.message}
        </p>
      )}

      <div className="checkbox-submit flex flex-col gap-6 md:justify-between md:flex-row">
        <div className="checkbox flex gap-1 items-center">
          <input
            type="checkbox"
            className="checkbox-box accent-green-yellow w-5 h-5"
          />
          <p className="terms-and-condition text-gray-label text-[10px] font-normal">
            Remember me.
          </p>
        </div>
        <input
          type="submit"
          value="Login"
          className="signup-btn  p-3 md:w-[200px] rounded-[50px] bg-green-yellow text-dark-green font-bold text-xs cursor-pointer"
        />
      </div>
    </form>
  );
}

export default Login;
