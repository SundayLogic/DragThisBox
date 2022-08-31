import {motion} from "framer-motion";
const Slidder = () => {
    return(
        <motion.div className="bg-blue-300 h-[60vh] w-[100vw]"
            drag="x"
            dragConstraints={{left: 0, right:300}}
            dragSnapToOrigin
        >
            
        </motion.div>
    );
};
export default Slidder;