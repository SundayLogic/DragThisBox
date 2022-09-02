import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import useAppStore from "../Store";
const Slidder = () => {
  const count = useAppStore((state) => state.count);
  let isActive = useAppStore((state) => state.isActive);
  let setIsActive = useAppStore((state) => state.changeIsActive);
  return (

    <motion.div
      className="bg-orange-300/5 flex-1 w-[100vw] flex items-center justify-center overflow-hidden rounded-lg"
      initial={{
        x: 365,
        y: -10
      }}
      animate={{
        x: isActive ? 0 : 365,
        y: isActive ? [-10,100] : -10
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
    }}
    >
      <h1 className="text-white text-9xl">{count}</h1>
    </motion.div>
  );
};
export default Slidder;
