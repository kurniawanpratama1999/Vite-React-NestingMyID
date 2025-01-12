import "../assets/styles/component_styles/button.css";

const Button = ({ label, className = "bg-blue", ...props }) => {
  return (
    <button className={`button reguler ${className}`.trim()} {...props}>
      {label}
    </button>
  );
};

export default Button;
