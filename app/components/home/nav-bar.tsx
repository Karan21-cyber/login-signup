import Link from "next/link";
import { loginAtom } from "../../../atoms/auth";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useRecoilState(loginAtom);
  const router = useRouter();

  const handleLogout = () => {
    setText("");
    router.push("/");
  };

  return (
    <>
      <nav className="nav-section w-full flex justify-between text-[17px] px-[10%] py-[2%] font-bold tracking-[1.02px]">
        <FiMenu size={25} className={`menu-icon mt-1.5 lg:hidden ${open ? "hidden" : "block"}`} onClick={() => setOpen(true)} />
        <div className="nav-page-link hidden  lg:flex gap-5 xl:gap-12 justify-center items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/pages"}>Pages</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className={`nav-page-links flex  gap-2 md:gap-5 xl:gap-12 text-sm ${open ? "hidden" : "block"} `}>
          <select className="select-container bg-transparent">
            <option>English</option>
            <option>Nepali</option>
          </select>
          {text ? (
            <h1
              className="signin-btn text-violet-bg px-3 py-2 rounded-[20px] bg-white cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </h1>
          ) : (
            <>
              {" "}
              <Link
                href={"/login"}
                className="signin-btn text-violet-bg px-3 py-2 rounded-[20px] bg-white"
              >
                Sign in
              </Link>
              <Link
                href={"/signup"}
                className="register-btn text-violet-bg px-3 py-2 rounded-[20px] bg-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      {open ? (
        <div className="nav-page-link relative flex flex-col gap-3 w-[350px] h-screen -mt-14 py-16 px-10  bg-slate-500 ">
          <IoCloseOutline size={25} className="menu-icon mt-1.5 lg:hidden absolute right-7" onClick={() => setOpen(false)} />
          <div className="mt-10"></div>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/pages"}>Pages</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
