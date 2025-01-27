import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router";
import headerStyles from "./header";

const buttonListCollection = [
  { is_auth: null, label: "about" },
  { is_auth: false, label: "login" },
  { is_auth: false, label: "register" },
  { is_auth: true, label: "create" },
  { is_auth: true, label: "link-collection" },
  { is_auth: true, label: "profile" },
  { is_auth: true, label: "logout" },
];

const Header = ({ isAuth }) => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [filterdButton, setFilteredButton] = useState([]);
  const { pathname } = useLocation();

  // styling
  const styles = headerStyles();

  const handleShowNav = () => setIsShowNav(!isShowNav);

  const handleListMenu = (e, label) => {
    e.preventDefault();
    navigate(`/${label}`);
    setIsShowNav(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const buttons = buttonListCollection.filter(
      (value) => value.is_auth === isAuth || value.is_auth === null
    );
    setFilteredButton(buttons);
  }, [isAuth]);

  return (
    <header className={styles.header}>
      <h1 className={styles.heading1}>
        <NavLink to="/">Nesting.</NavLink>
      </h1>
      <button onClick={handleShowNav} className={styles.btn_showNav}>
        <MdMenu className="" />
      </button>
      <nav className={headerStyles({ isShowNav }).nav({})}>
        {filterdButton.map((value, index) => {
          return (
            <button
              key={index}
              className={headerStyles({
                pathname,
                label: value.label,
              }).btn_list({})}
              onClick={(e) => handleListMenu(e, value.label)}
            >
              {value.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
