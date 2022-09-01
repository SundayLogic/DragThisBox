import { useAnimation } from "framer-motion";
import React, { useRef, useState } from "react";
import { useButton } from "react-aria";

interface ButtonProps {
  onClick: () => void;
  children: string | number;
}

function Button({ onClick, children }: ButtonProps) {
    return <button className="bg-purple-600/50 p-4 text-2xl rouded-md" onClick={() => onClick()}>{children}</button>
}

const BtnTest = () => {
  const [result, setResult] = useState<number>(0);
  return (
    <div className="p-5 mb-20 text-white flex flex-col space-y-5">
        <h1 className="text-center text-6xl">{result}</h1>
        <Button 
        onClick={() => setResult(result+1)} children={"Increase"}/>
    </div>

  );
};

export default BtnTest;
