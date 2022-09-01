import { useAnimation } from "framer-motion";
import React, { useRef, useState } from "react";
import { useButton } from "react-aria";
import useAppStore from "../../Store";
interface ButtonProps {
  onClick: () => void;
  children: string | number;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-blue-500/60 tracking-wide p-4 text-2xl rounded-lg select-none"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

const BtnTest = () => {
  const data = useAppStore((state) => state.count)
  const inc = useAppStore((state) => state.inc)
  return (
    <div className="p-5 mb-20 text-white flex flex-col space-y-5">
      <h1 className="text-center text-6xl tabular-nums">{data}</h1>
      <Button onClick={inc} children={"Increase"} />
    </div>
  );
};

export default BtnTest;
