import "../assets/styles/component_styles/form.css";

const Form = ({ children, className = "", cMessage = "hidden", message = "message dot text", ...props }) => {
  return (
    <form className={`grid relative ${className}`.trim()} {...props}>
      <div className={`message fixed tl-center-x ${cMessage}`.trim()}>{message}</div>
      {children}
    </form>
  );
};

export default Form;
