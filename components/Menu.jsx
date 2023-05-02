import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact Us", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ catMenu, setCatmenu }) => {
  return (
    <ul className="hidden md:flex items-center font-medium gap-8 text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer gap-2 flex items-center relative"
                onMouseEnter={() => setCatmenu(!catMenu)}
                onMouseLeave={() => setCatmenu(!catMenu)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {catMenu && (
                  <ul className="absolute top-6 left-0 bg-white min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((subItem) => {
                      return (
                        <Link
                          href={"/"}
                          key={subItem.id}
                          onClick={() => setCatmenu(!catMenu)}
                        >
                          <li className="h-12 flex justify-between items-center rounded-md  px-3 hover:bg-black/[0.03]">
                            {subItem.name}
                            <span className="opacity-50 text-sm">75</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer text-black">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
