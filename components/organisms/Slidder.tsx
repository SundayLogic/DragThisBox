import {motion} from "framer-motion";
const Slidder = () => {
    return(
        <motion.div className="bg-blue-300 h-[10rem] w-[100vw] flex justify-center items-center text-3xl"
            drag="y"
            dragConstraints={{top: 50, bottom:10}}
            whileDrag={{
                scale: 0.9,
                rotateX: 70,
                
            }}
        >
            <h1>Text</h1>    
        </motion.div>
    );
};
export default Slidder;