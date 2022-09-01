import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FocusRing, useButton } from "react-aria";
import useAppStore from "../../Store";

interface ButtonProps {
  onClick: () => any;
  children: string | number;
}
function Button({ onClick, children }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  let controls = useAnimation();
  let ref = React.useRef() as React.RefObject<Element>;
  let { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({background: "rgb(96 165 250 / 0.6)"})
      },
      onPress: () => {
        onClick();
        controls.start({
          background: ["rgb(96 165 250 / 0.6)", "rgb(59 130 246 / 0.6)"],
        });
      },
    },
    ref
  );
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      <motion.button
        {...buttonProps}
        className="bg-blue-500/60 tracking-wide px-8 py-4 text-2xl rounded-lg select-none touch-none focus:outline-none"
        animate={controls}
      >
        <motion.h2
          className="font-bold"
        >
          {children}
        </motion.h2>
      </motion.button>
    </FocusRing>
  );
}

const BtnTest = () => {
  const count = useAppStore((state) => state.count);
  const inc = useAppStore((state) => state.inc);
  const dec = useAppStore((state) => state.dec);
  return (
    <div className="p-5 mb-20 text-white flex flex-col space-y-5">
      <h1 className="text-center text-6xl tabular-nums">{count}</h1>
      <div className="flex space-x-4">
        <Button onClick={dec} children={"-"} />
        <Button onClick={inc} children={"+"} />
      </div>
    </div>
  );
};

export default BtnTest;
