import BtnTest from "../atoms/Buttons/BtnTest";
import Slidder from "../organisms/Slidder";
const Test = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col  items-center overflow-hidden">
      <Slidder />
      <BtnTest />
    </div>
  ); 
};
export default Test;

