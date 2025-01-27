import { NavLink } from "react-router";

const Comp_Card = ({
  title,
  desc,
  Icon,
  className = "green",
  redirect = null,
}) => {
  return redirect ? (
    <NavLink to={redirect} className="card-wrapper">
      <div className={`icon-wrapper ${className}`.trim()}>
        <Icon className="icon" />
      </div>
      <h6>{title}</h6>
      <p>{desc}</p>
    </NavLink>
  ) : (
    <div className="card-wrapper">
      <div className={`icon-wrapper ${className}`.trim()}>
        <Icon className="icon" />
      </div>
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
  );
};

export default Comp_Card;
