import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobilemenu] = useState(false);
  const [catMenu, setCatmenu] = useState(false);
  const [showMenu, setShowMenu] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShowMenu("-translate-y-[80px]");
      } else {
        setShowMenu("shadow-sm");
      }
    } else {
      setShowMenu("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center z-20 sticky top-0 transition-transform duration-300
      ${showMenu}
      `}
    >
      <Wrapper className="h-[70px] pb-5 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className="w-24" alt="logo" />
        </Link>
        <Menu catMenu={catMenu} setCatmenu={setCatmenu} />
        {mobileMenu && (
          <MobileMenu
            catMenu={catMenu}
            setCatmenu={setCatmenu}
            setMobilemenu={setMobilemenu}
          />
        )}

        <div className="flex justify-center items-center">
          {/* favorite icon */}
          <Link
            href={"/"}
            className="w-10 md:w-12 h-10 md:h-12 ml-3 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative"
          >
            <IoMdHeartEmpty className="text-[20px] md:text-[25px]" />
            <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] px-[2px] md:px-[5px] items-center flex justify-center text-white">
              24
            </span>
          </Link>
          {/* cart icon */}
          <Link
            href={"/cart"}
            className="w-10 md:w-12 h-10 md:h-12 ml-3 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative"
          >
            <BsCart className="text-[20px] md:text-[25px]" />
            <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] px-[2px] md:px-[5px] items-center flex justify-center text-white">
              10
            </span>
          </Link>
          {/* menu icons */}
          <div
            className="md:hidden w-10 md:w-12 h-10 md:h-12 ml-3  flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer"
            onClick={() => setMobilemenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-[25px]" />
            ) : (
              <BiMenuAltRight className="text-[25px]" />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
