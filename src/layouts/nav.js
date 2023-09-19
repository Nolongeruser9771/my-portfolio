import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigator() {
  let location = useLocation().pathname;
  console.log(location);
  const navbar = [
    {
      pathname: "/my-portfolio",
      name: "Home",
    },
    {
      pathname: "/about",
      name: "About",
    },
    {
      pathname: "/projects",
      name: "Projects",
    },
    {
      pathname: "/contact",
      name: "Contact",
    },
  ];

  //lang switch
  const [on, setOn] = useState(
    localStorage.getItem("ENG_ON")
      ? JSON.parse(localStorage.getItem("ENG_ON"))
      : true
  );
  const langSwitch = (targetLang) => {
    if (targetLang) {
      setOn(targetLang === "en");
      localStorage.setItem("ENG_ON", JSON.stringify(targetLang === "en"));
    }
  };

  return (
    <div className="container">
      <div className="row nav">
        <div className="col-6" style={{ textAlign: "left" }}>
          <span
            onClick={() => langSwitch("en")}
            className={on ? "lang-active" : ""}
          >
            English
          </span>
          <span
            onClick={() => langSwitch("jp")}
            className={!on ? "lang-active" : ""}
          >
            日本語
          </span>
        </div>
        <div className="col-6">
          <div className="row navbar">
            {navbar.map((nav, index) => (
              <div
                key={index}
                className={
                  location === nav.pathname ? "col btn active" : "col btn"
                }
              >
                <Link to={nav.pathname}>{nav.name}</Link>
              </div>
            ))}

            <div className="col decor-btn">
              <Link to={""}>Resume</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
