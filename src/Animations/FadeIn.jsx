import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeIn({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 1.03 },
        visible: { opacity: 1, scale: 1 },
      }}>
      {children}
    </motion.div>
  );
}

function FadeInDown({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: "6px" },
        visible: { opacity: 1, y: "0px" },
      }}>
      {children}
    </motion.div>
  );
}

export { FadeIn, FadeInDown };
