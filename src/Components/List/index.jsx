const List = ({ label, className = "", ...props }) => {
  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};

export default List;
