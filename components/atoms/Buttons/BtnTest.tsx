import { useAnimation } from "framer-motion";
import React, { useRef, useState } from "react";
import { useButton } from "react-aria";

interface ButtonProps {
  onClick: () => void;
  children: string | number;
}

function Button({ onClick, children }: ButtonProps) {
    return <button onClick={() => onClick()}>{children}</button>
}

const BtnTest = () => {
  const [result, setResult] = useState<number>(0);
  return (
    <div className="bg-slate-400 p-5 mb-20">
        <h1>{result}</h1>
        <Button onClick={() => setResult(result+1)} children={"Increase"}/>
    </div>

  );
};

export default BtnTest;
