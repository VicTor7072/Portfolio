import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { cn } from "../utils/cn";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "flex justify-between sticky mt-4 top-0 lg:items-center",
          {
            "w-screen h-screen absolute top-0 left-0 bg-primary-100 mt-0 py-4 px-7 flex-col":
              isNavOpen,
          },
        )}
      >
        <div className="font-extrabold tracking-normal">
          <p>egemen</p>
          <p className="-mt-2">tarikçi _</p>
        </div>

        <nav
          className={cn("hidden lg:inline", {
            "inline self-center mx-auto": isNavOpen,
          })}
        >
          <ul className="flex flex-col gap-16 text-center text-lg font-semibold lg:flex-row">
            <li className="hover:text-accent-200 duration-200 transition-colors cursor-default">
              <a href="">Home</a>
            </li>
            <li className="hover:text-accent-200 duration-200 transition-colors cursor-default">
              <a href="">Work</a>
            </li>
            <li className="hover:text-accent-200 duration-200 transition-colors cursor-default">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>

        <div
          className={cn("hidden lg:flex text-2xl gap-x-2", { "flex self-center mx-auto": isNavOpen })}
        >
          <a
            href=""
            className="p-2 rounded hover:bg-accent-100 active:bg-accent-200 hover:text-primary-100 transition-colors duration-200 cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            className="p-2 rounded hover:bg-accent-100 active:bg-accent-200 hover:text-primary-100 transition-colors duration-200 cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href=""
            className="p-2 rounded hover:bg-accent-100 active:bg-accent-200 hover:text-primary-100 transition-colors duration-200 cursor-pointer"
          >
            <FaInstagram />
          </a>
        </div>
      </header>

      <button
        className="p-5 lg:hidden text-3xl absolute top-0 right-0"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
    </>
  );
};

export default Header;
