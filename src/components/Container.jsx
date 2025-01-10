import React from "react";
import "../assets/styles/component_styles/container.css";

const Container = ({ children, className = "", ...props }) => {
  return (
    <section className={`container ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Container;
