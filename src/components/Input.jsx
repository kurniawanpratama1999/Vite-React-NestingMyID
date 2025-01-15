import "../assets/styles/component_styles/input.css";

const Input = ({
  children,
  element = "input",
  htmlFor = "input-1",
  type = "text",
  classLabel = "focus-blue",
  classInput = "",
  ...props
}) => {
  return (
    <label htmlFor={htmlFor} className={`label grid relative ${classLabel}`.trim()}>
      {element === "input" ? (
        <>
          <input
            type={type}
            id={htmlFor}
            className={`input grow ${classInput}`}
            name={htmlFor}
            spellCheck="false"
            autoComplete="off"
            {...props}
          />
          {children}
        </>
      ) : element === "textarea" ? (
        <>
          <textarea
            style={{ resize: "none" }}
            type={type}
            id={htmlFor}
            className={`input ${classInput}`}
            name={htmlFor}
            spellCheck="false"
            autoComplete="off"
            {...props}
          />
          {children}
        </>
      ) : (
        <>
          <input
            type="checkbox"
            id={htmlFor}
            className={`input ${classInput}`}
            name={htmlFor}
            spellCheck="false"
            autoComplete="off"
            {...props}
          />
          {children}
        </>
      )}
    </label>
  );
};

export default Input;
