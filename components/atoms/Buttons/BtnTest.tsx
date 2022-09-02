import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FocusRing, useButton } from "react-aria";
import useAppStore from "../../Store";
const BtnTest = () => {
  const count = useAppStore((state) => state.count);
  const inc = useAppStore((state) => state.inc);
  const dec = useAppStore((state) => state.dec);
  const del = useAppStore((state) => state.del);
  const changeSlidder = useAppStore((state) => state.changeIsActive);
  return (
    <div className="p-5 mb-20 text-flex text-white flex-col space-y-5">
      <h1 className="text-center text-8xl tabular-nums font-extralight">{count}</h1>
      <div className="flex space-x-4">
        <div className="text-orange-600/90 flex-wrap flex ">
          <Button onClick={del} children={"C"} buttonBg="bg-orange-600/70"/>
        </div>
        <Button onClick={dec} children={"-"} buttonBg="bg-slate-600/90"/>
        <Button onClick={inc} children={"+"} buttonBg="bg-slate-600/90"/>
        <Button onClick={changeSlidder} children={"S"} buttonBg="bg-slate-600/90"/>
      </div>
    </div>
  );
};

export default BtnTest;

interface ButtonProps {
  onClick: () => void;
  children: string | number;
  buttonBg: string;
}
function Button({ onClick, children, buttonBg }: ButtonProps) {
  const lightColor = "rgb(148 163 184 / 0.9)";
  const darkColor = "rgb(71 85 105 / 0.9)";
  let controls = useAnimation();
  let ref = React.useRef() as React.RefObject<Element>;
  let { buttonProps, isPressed } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({
          background: lightColor,
          transition: { duration: 0.39 },
        });
      },
      onPressEnd: () => {
        controls.start({
          background: darkColor,
          transition: { duration: 0.39 },
        });
      },
      onPress: () => {
        onClick(),
        controls.start({
          background: [lightColor, darkColor],
          transition: { duration: 0.39 },
        });
      }, 
    },
    ref
  );
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black/10 rounded-sm">
      <button
        className="select-none touch-none focus:outline-none"
        {...buttonProps}
      >
        <motion.button
          className=" bg-slate-600/90 tracking-wide px-7  py-5  cursor-pointer text-3xl rounded-full select-none touch-none focus:outline-none "
          animate={controls}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <h2 className="font-bold">{children}</h2>
        </motion.button>
      </button>
    </FocusRing>
  );
}
