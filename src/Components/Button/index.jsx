import buttonStyles from "./button";
const Button = ({ label, bgColor = "red", className = "", ...props }) => {
  return (
    <button className={buttonStyles({ bgColor, testing: ["grid", { pos: "center" }] }, className)} {...props}>
      {label}
    </button>
  );
};

export default Button;
