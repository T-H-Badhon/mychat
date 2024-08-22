import ContactList from "@/components/shared/ContactList";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen flex flex-col  p-5">
 
        <div className="col-span-3">{children}</div>
      
    </div>
  );
};

export default Mainlayout;
