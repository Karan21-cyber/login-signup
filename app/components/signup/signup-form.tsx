import Input from "../common/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie } from "@/utils/signup/action";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is requiired")
      .trim()
      .test("username", "Username must contains alphabets", (value) =>
        /[A-Za-z]/.test(value || "")
      )
      .lowercase(),
    email: yup.string().required("Email is required").email("Email is Invalid"),
    password: yup
      .string()
      .required("Password is required")
      .test("password", "Password must contain a capital letter", (value) =>
        /[A-Z]/.test(value || "")
      )
      .test("password", "Password must contain a small letter", (value) =>
        /[a-z]/.test(value || "")
      )
      .test("password", "Password must contain a number", (value) =>
        /[0-9]/.test(value || "")
      )
      .test("password", "Password must contain a special character", (value) =>
        /[!@#$%^&*]/.test(value || "")
      )
      .test(
        "password",
        "Password must be at least 8 characters long",
        (value) => (value || "").length >= 8
      ),
    checked: yup.boolean().required().isTrue("Terms & condition is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormData) {
    const userData = {
      username: data?.username,
      email: data?.email,
      password: data?.password,
    };
    setCookie(data?.email, userData, 1);
    router.push("http://localhost:3000/login");
  }

  return (
    <form
      className="formFields-conainer flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        placeholder="Enter UserName"
        label="username"
        register={register}
      />
      {errors?.username && (
        <p className="errors text-[10px] text-red-700">
          {errors?.username?.message}
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
            className="signin-checkbox w-5 h-5 accent-violet-400  "            {...register("checked")}
          />

          <p className="terms-and-condition text-gray-label text-[10px] font-normal">
            I accept the terms & condition
          </p>
          {errors?.checked && (
            <p className="errors text-[10px] text-red-700">
              {errors?.checked?.message}
            </p>
          )}
        </div>
        <div className="signin-button w-[150px] py-2 px-5 bg-violet-bg rounded-[50px]">
          <input
            type="submit"
            value="Sign Up"
            className="signup-btn w-[110px]  py-2 text-center text-white font-bold text-xs "
          />
        </div>
      </div>
    </form>
  );
}

export default SignUp;
