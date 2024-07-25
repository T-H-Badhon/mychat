import ContactList from "@/components/shared/ContactList";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen flex flex-col  p-5">
      <div className="my-5 ">My Chat</div>
      <div className="flex-1 grid grid-cols-4 h-[100%]">
        <div className="col-span-1 border-r-2 border-red-500 h-[100%] ">
          <ContactList/>
        </div>
        <div className="col-span-3">{children}</div>
      </div>
      <div></div>
    </div>
  );
};

export default Mainlayout;
