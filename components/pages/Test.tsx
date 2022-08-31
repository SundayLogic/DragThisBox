import { MotionConfig } from "framer-motion";
import Slidder from "../organisms/Slidder";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useButton, FocusRing } from "react-aria";
const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-end justify-end bg-orange-100/20 h-[100vh] overflow-hidden items-center">
      <motion.div
        animate={{
          opacity: open ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <p className="max-w-[80vw] text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et id
          repellendus quia quasi vel quis veniam non! Ratione, molestiae ipsum?
        </p>
      </motion.div>
        <Button onClick={() => setOpen(!open)} children={"Button"}/>
      <Slidder />
    </div>
  );
};
export default Test;
interface ButtonProps {
    onClick: () => void;
    children: string;
}
function Button({onClick, children}:ButtonProps){
    let ref = React.useRef() as React.RefObject<Element>;
    let {buttonProps, isPressed} = useButton({onPress: onClick}, ref)
    return(
        <FocusRing focusClass="ring">
            <button {...buttonProps} className={`${isPressed ? "bg-blue-400/30" : "bg-blue-400"} px-4 py-2 rounded-md touch-none select-none focus:outline-none text-2xl`}>
                {children}
            </button>
        </FocusRing>
    )
}

