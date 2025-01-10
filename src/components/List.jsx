import "../assets/styles/component_styles/list.css";

const List = ({ label, className = "", ...props }) => {
  return (
    <button type="button" className={`btn-list ${className}`.trim()} {...props}>
      {label}
    </button>
  );
};

export default List;
