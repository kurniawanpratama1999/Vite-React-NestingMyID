import containerStyles from "./container";

const Container = ({ children, display = "grid", className = "place-content-center", ...props }) => {
  return (
    <section className={containerStyles({ display }, className)} {...props}>
      {children}
    </section>
  );
};

export default Container;
