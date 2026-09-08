import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingText = ({
  text,
  speed = 65,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        index += 1;
        setDisplayedText(text.slice(0, index));
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={`flex items-center ${className}`}>
      <span>{displayedText}</span>

      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ml-1 inline-block h-[1em] w-[2px] bg-current"
      />
    </div>
  );
};

export default TypingText;