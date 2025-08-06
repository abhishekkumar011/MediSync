import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];

  return (
    <div className="flex justify-between py-4 px-20 rounded shadow-md">
      <div className="flex gap-20 items-center">
        <div className="flex gap-2 items-center">
          <Image alt="logo" src={"/logo.svg"} width={35} height={50} />
          <h3 className="text-2xl font-medium">
            Medi<span className="text-blue-600">Sync</span>
          </h3>
        </div>

        <ul className="md:flex gap-5 hidden">
          {menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li className="cursor-pointer hover:text-blue-600 hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <Button className="bg-blue-600 hover:bg-blue-500">Get Started</Button>
    </div>
  );
}

export default Header;
