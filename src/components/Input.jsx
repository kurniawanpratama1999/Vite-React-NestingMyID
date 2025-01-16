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
      ) : (
        element === "textarea" && (
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
        )
      )}
    </label>
  );
};

Input.Checkbox = ({ htmlFor = "show-password", onChange, label = "show password" }) => {
  return (
    <label htmlFor={htmlFor} onChange={onChange}>
      <input type="checkbox" className="input" id={htmlFor} name={htmlFor} />
      <span>{label}</span>
    </label>
  );
};

export default Input;
