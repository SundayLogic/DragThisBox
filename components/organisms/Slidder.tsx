import {motion} from "framer-motion";
const Slidder = () => {
    return(
        <motion.div className="bg-blue-300 h-[20rem] w-[100vw] flex justify-center items-center text-3xl"
            drag="y"
            initial={{
                opacity: 0.3,
                y: 200,
            }}
            whileDrag={{
                opacity: 1,
                style: {borderRadius: 20}
            }}
            dragConstraints={{top: 0, bottom:10}}
        >
            <h1>Text</h1>    
        </motion.div>
    );
};
export default Slidder;