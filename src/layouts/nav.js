import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../translation/i18n";

export default function Navigator() {
  let location = useLocation().pathname;
  //translation
  const { t } = useTranslation();

  const navbar = [
    {
      pathname: "/my-portfolio",
      name: t("Home"),
    },
    {
      pathname: "/about",
      name: t("About"),
    },
    {
      pathname: "/projects",
      name: t("Projects"),
    },
    {
      pathname: "/contact",
      name: t("Contact"),
    },
  ];

  //lang switch
  const [lang, setLang] = useState(
    localStorage.getItem("STORAGED_LANG")
      ? JSON.parse(localStorage.getItem("STORAGED_LANG"))
      : "en"
  );

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const langSwitch = (targetLang) => {
    if (targetLang) {
      setLang(targetLang);
      localStorage.setItem("STORAGED_LANG", JSON.stringify(targetLang));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row nav">
        <div
          className="col-8 col-sm-8 col-md-4 col-lg-4"
          style={{ textAlign: "left" }}
        >
          <span
            onClick={() => langSwitch("en")}
            className={lang === "en" ? "lang-active" : ""}
          >
            English
          </span>
          <span
            onClick={() => langSwitch("jp")}
            className={lang === "jp" ? "lang-active" : ""}
          >
            日本語
          </span>
        </div>

        <div className="col-4 col-sm-4 col-md-8 col-lg-8">
          <div className="row navbar">
            {navbar.map((nav, index) => (
              <div
                key={index}
                className={
                  location === nav.pathname
                    ? "col d-none col-sm col-md d-md-block col-lg btn active"
                    : "col d-none col-sm col-md d-md-block col-lg btn"
                }
              >
                <Link to={nav.pathname}>{nav.name}</Link>
              </div>
            ))}

            <div className="col d-none col-sm col-md d-md-block col-lg decor-btn">
              <Link
                target="_blank"
                to={
                  "https://drive.google.com/file/d/1b2mB2l0JeeWnYXzRkC_xEh75n6aVmc9P/view?usp=sharing"
                }
              >
                {t("Resume")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
