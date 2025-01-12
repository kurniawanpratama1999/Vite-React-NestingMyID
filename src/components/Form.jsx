import "../assets/styles/component_styles/form.css";

const Form = ({ children, className = "", message, ...props }) => {
  return (
    <form className={`grid relative ${className}`.trim()} {...props}>
      <div className="message absolute">{message?.text || "message dot text"}</div>
      {children}
    </form>
  );
};

export default Form;
