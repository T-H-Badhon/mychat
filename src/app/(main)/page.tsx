"use client";
import React, { use, useState } from "react";
import Collapsible from "react-collapsible";
import { HiOutlinePlus } from "react-icons/hi2";

const Homepage = ({ searchParams }: { searchParams: { hi: string } }) => {
  console.log(searchParams);
  const data = ["i am first", "i am second"];
  const [texttt, setText] = useState(data[0]);
  const [open, setOpen] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className=" w-[700px] mx-auto my-60 relative">
      {/* <div className="group bg-red-600 text-white  w-fit">
        <HiOutlinePlus className="w-40 h-40" strokeWidth={0.5} />
        <HiOutlinePlus
          strokeWidth={0.5}
          className="rotate-45 w-40 h-40 absolute top-0 group-hover:scale-0 transition-all duration-300"
        />
      </div> */}
      <div className="group relative bg-red-600 h-24">
        <div className="absolute top-5 left-0">
          <div className="group  text-white   w-44 relative">
            <div className="-rotate-45 absolute">
              <hr className="w-28 border-[2px] border-white  translate-x-44 group-hover:translate-x-0 transition-all duration-500"></hr>
            </div>
            <div className="rotate-45 absolute top-5">
              <hr className="w-28 border-[2px] border-white translate-x-44 group-hover:translate-x-0 transition-all duration-500"></hr>
            </div>
          </div>
        </div>
        <div className="absolute -rotate-90">
        <div className="group text-white  w-44 relative ">
          <div className="-rotate-45 absolute top-5 left-0">
            <hr className="w-28 border-[2px] border-white  translate-x-44 group-hover:translate-x-0 transition-all duration-500"></hr>
          </div>
          <div className="rotate-45 absolute top-5">
            <hr className="w-28 border-[2px] border-white translate-x-44 group-hover:translate-x-0 transition-all duration-500"></hr>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
