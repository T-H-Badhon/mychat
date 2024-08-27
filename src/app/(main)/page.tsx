"use client";
import TextStrocker from "@/components/shared/TextStrocker";
import React, { use, useState } from "react";
import Collapsible from "react-collapsible";
import { HiOutlinePlus } from "react-icons/hi2";

const Homepage = ({ searchParams }: { searchParams: { hi: string } }) => {
  const text = 'fsfsfsfsg';
  return (
    <div className="w-fit bg-red-400">
      <TextStrocker>HI</TextStrocker>
    </div>
  );
};

export default Homepage;
