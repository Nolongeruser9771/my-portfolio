import Navigator from "./nav";
import "./layout.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AiOutlineHome,
  AiOutlineMeh,
  AiOutlineFundProjectionScreen,
  AiOutlineComment,
  AiOutlineDownload,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa6";

export default function Layout({ children }) {
  //translation
  const { t } = useTranslation();
  let location = useLocation().pathname;

  //AiOutlineDownload

  const navbar = [
    {
      pathname: "/my-portfolio",
      icon: <AiOutlineHome />,
      name: t("Home"),
    },
    {
      pathname: "/about",
      icon: <AiOutlineMeh />,
      name: t("About"),
    },
    {
      pathname: "/projects",
      icon: <AiOutlineFundProjectionScreen />,
      name: t("Projects"),
    },
    {
      pathname: "/contact",
      icon: <AiOutlineComment />,
      name: t("Contact"),
    },
  ];
  return (
    <div className="container wrapper">
      <input type="checkbox" className="" id="nav-mobile-active" hidden />
      <div className="row">
        <div className="col-10 col-sm-11 col-md-12">
          <Navigator />
        </div>
        <label
          className="col-2 col-sm-1 d-md-none nav-mobile-active-btn"
          htmlFor="nav-mobile-active"
        >
          <FaBars />
        </label>
      </div>
      <label htmlFor="nav-mobile-active" className="nav-overlay"></label>

      <div className="nav-mobile">
        <label className="nav-bars-btn" htmlFor="nav-mobile-active">
          <AiOutlineClose />
        </label>
        <ul className="nav-mobile-list">
          {navbar.map((nav, index) => (
            <li
              key={index}
              className={location === nav.pathname ? "mobile-active" : ""}
            >
              <span style={{ marginRight: "10px" }}>{nav.icon}</span>
              <Link to={nav.pathname}>{nav.name}</Link>
            </li>
          ))}

          <li className="decor-btn">
            <span style={{ marginRight: "10px" }}>
              <AiOutlineDownload />
            </span>
            <Link
              to={
                "https://drive.google.com/file/d/1b2mB2l0JeeWnYXzRkC_xEh75n6aVmc9P/view?usp=sharing"
              }
              target="_blank"
            >
              {t("Resume")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="row content">{children}</div>
    </div>
  );
}
