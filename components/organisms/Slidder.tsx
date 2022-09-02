import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import useAppStore from "../Store";
const Slidder = () => {
  let isActive = useAppStore((state) => state.isActive);
  let setIsActive = useAppStore((state) => state.changeIsActive);
  return (

    <motion.div
      className="bg-orange-300/20 flex-1 w-[100vw] flex items-center justify-center overflow-hidden rounded-lg"
      initial={{
        x: 365,
        y: -10
      }}
      animate={{
        x: isActive ? 0 : 365,
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
    }}
    >
      <h1 className="text-white text-2xl">Slidder</h1>
    </motion.div>
  );
};
export default Slidder;
