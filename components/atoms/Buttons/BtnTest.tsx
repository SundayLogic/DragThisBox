import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FocusRing, useButton } from "react-aria";
import useAppStore from "../../Store";
const BtnTest = () => {
  const count = useAppStore((state) => state.count);
  const inc = useAppStore((state) => state.inc);
  const dec = useAppStore((state) => state.dec);
  return (
    <div className="p-5 mb-20 text-white flex flex-col space-y-5">
      <h1 className="text-center text-6xl tabular-nums">{count}</h1>
      <div className="flex space-x-4">
        <Button children={"-"} />
        <Button children={"+"} />
      </div>
    </div>
  );
};

export default BtnTest;

interface ButtonProps {
  children: string | number;
}
function Button({ children }: ButtonProps) {
  const darkColor = "rgb(59 130 246 / 0.6)";
  const lightColor = "rgb(147 197 253 / 0.6)";
  let controls = useAnimation();
  let ref = React.useRef() as React.RefObject<Element>;
  let { buttonProps, isPressed } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({
          background: lightColor,
        });
      },
      onPressEnd: () => {
        controls.start({
          background: darkColor,
          transition: { duration: 0.39 },
        });
      },
    },
    ref
  );
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      <motion.button
        animate={controls}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
        className="bg-blue-500/60 tracking-wide px-8 py-4 cursor-pointer text-2xl rounded-lg select-none touch-none focus:outline-none"
      >
        <span {...buttonProps}>
          <h2 className="font-bold">{children}</h2>
        </span>
      </motion.button>
    </FocusRing>
  );
}
