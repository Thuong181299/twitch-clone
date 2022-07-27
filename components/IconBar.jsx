import React from "react";

import Remote from "../public/assets/remote.png";
import Mic from "../public/assets/mic.png";
import Headphones from "../public/assets/headphones.png";
import Trophy from "../public/assets/trophy.png";
import Paint from "../public/assets/paint.png";
import Image from "next/image";

const IconBar = () => {
  return (
    <div className="p-2 md:p-8">
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Games</p>
          <Image src={Remote} alt="" />
        </div>
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Mic</p>
          <Image src={Mic} alt="" />
        </div>
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Headphones</p>
          <Image src={Headphones} alt="" />
        </div>
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Trophy</p>
          <Image src={Trophy} alt="" />
        </div>
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Paint</p>
          <Image src={Paint} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IconBar;
