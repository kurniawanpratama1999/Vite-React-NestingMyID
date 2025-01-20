import wrapperStyles from "./wrapper";
const Wrapper = ({
  bgColor = "auto",
  width = "auto",
  height = "auto",
  display = "grid",
  position = "static",
  children,
  className = "",
}) => {
  return (
    <section className={wrapperStyles.wrapper({ bgColor, width, height, display, position }, className)}>
      {children}
    </section>
  );
};

export default Wrapper;
