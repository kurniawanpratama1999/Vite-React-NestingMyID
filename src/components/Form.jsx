import "../assets/styles/component_styles/form.css";

const Form = ({ children, className = "", message, ...props }) => {
  return (
    <form className={`grid relative ${className}`.trim()} {...props}>
      <div className="message fixed tl-center-x hidden">{message?.text || "message dot text"}</div>
      {children}
    </form>
  );
};

export default Form;
