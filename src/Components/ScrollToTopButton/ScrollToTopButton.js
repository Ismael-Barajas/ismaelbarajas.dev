import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./ScrollToTopButton.module.css";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className={styles.button}>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
}
