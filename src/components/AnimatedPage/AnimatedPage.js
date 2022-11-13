import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

export const AnimatedPage = ({ children }) => {
    return (
        <motion.main
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25 }}
        >
            {children}
        </motion.main>
    );
};
