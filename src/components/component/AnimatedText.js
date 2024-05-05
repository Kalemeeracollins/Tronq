import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>This</h1>
      <h1>is</h1>
      <h1>an</h1>
      <h1>animated</h1>
      <h1>text</h1>
    </motion.div>
  );
};

export default AnimatedText;
