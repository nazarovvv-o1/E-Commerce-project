import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavbarTop = () => {
  return (
    <div className="bg-black py-3 px-4 flex items-center justify-between">
      <div className="w-full flex justify-center">
        <h1 className="font-normal text-[14px] leading-5 text-[#FAFAFA] text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold border-b-1 pl-2">ShopNow</span>
        </h1>
      </div>
      <div className="absolute right-4 flex items-center gap-1 pr-[136px]">
        <h1 className="text-white text-sm">English</h1>
        <ExpandMoreIcon className="text-white" />
      </div>
      <h1>salom uzb</h1>
    </div>
  );
};

export default NavbarTop;
