import inputStyles from "./input";

const Input = ({
  children,
  focus = "green",
  element = "input",
  htmlFor = "input-1",
  type = "text",
  classLabel = "",
  classInput = "",
  detail = "input box",
  ...props
}) => {
  return (
    <label htmlFor={htmlFor} className={inputStyles.label({ focus }, classLabel)}>
      {element === "input" ? (
        <>
          <span className={inputStyles.labelHeading}>{detail}</span>
          <input
            type={type}
            id={htmlFor}
            className={`${inputStyles.input} ${classInput}`.trim()}
            name={htmlFor}
            spellCheck="false"
            autoComplete="off"
            {...props}
          />
        </>
      ) : (
        element === "textarea" && (
          <>
            <textarea
              style={{ resize: "none" }}
              type={type}
              id={htmlFor}
              className={`${inputStyles.input} ${classInput}`.trim()}
              name={htmlFor}
              spellCheck="false"
              autoComplete="off"
              {...props}
            />
            {children}
          </>
        )
      )}
    </label>
  );
};

export const Checkbox = ({ htmlFor = "show-password", onChange, label = "show password", className = "" }) => {
  return (
    <label htmlFor={htmlFor} onChange={onChange} className={`${inputStyles.labelCheck} ${className}`.trim()}>
      <span>{label}</span>
      <input type="checkbox" id={htmlFor} name={htmlFor} />
    </label>
  );
};

export default Input;
