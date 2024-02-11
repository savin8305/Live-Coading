import Link from "next/link";
import React, { useEffect } from "react";
export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "service",
    url: "/service",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Jobs",
    url: "/jobs",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];
type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile = true }) => {
  useEffect(() => {
    console.log(isMobile);
  }, []);
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson] "
                    : "dark:text-white text-black"
                } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="lg:hidden mt-5">
          <div className="flex items-center flex-col w-full text-center py-6">
            <Link
              href={"/"}
              className={`text-[25px] font-Poppins font-[500] text-white dark:text-white`}
            >
              anchor-job
            </Link>
            {navItemsData &&
              navItemsData.map((item, index) => (
                <Link href={`${item.url}`} key={index} passHref>
                  <span
                    className={`${
                      activeItem === index
                        ? "dark:text-[#37a39a] text-[crimson] "
                        : "dark:text-white text-black"
                    } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
export default NavItems;
