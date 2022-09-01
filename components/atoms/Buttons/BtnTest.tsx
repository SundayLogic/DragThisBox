import React,{ useRef, ReactElement} from "react";
import { AriaButtonProps, useButton, ButtonAria, } from "react-aria";
import useAppStore from "../../Store";

interface ButtonProps{
  onClick: () => any;
  children: string | number;
}
function Button({ onClick, children }: ButtonProps) {
  let ref = React.useRef() as React.RefObject<Element>;
  let {buttonProps} = useButton( {onPress: onClick}, ref)
  return (
    <button
      {...buttonProps}
      className="bg-blue-500/60 tracking-wide p-4 text-2xl rounded-lg select-none touch-none"
    >
      {children}
    </button>
  );
}

const BtnTest = () => {
  const count = useAppStore((state) => state.count);
  const inc = useAppStore((state) => state.inc);
  return (
    <div className="p-5 mb-20 text-white flex flex-col space-y-5">
      <h1 className="text-center text-6xl tabular-nums">{count}</h1>
      <Button onClick={inc} children={"Increase"} />
    </div>
  );
};

export default BtnTest;
