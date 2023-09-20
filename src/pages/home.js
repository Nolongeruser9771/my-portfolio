import WebDevelop from "../../src/assets/images/home_illustation.png";
import DecorImage from "../assets/images/web_logo.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import i18n from "../translation/i18n";

import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import Logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row greeting">
        <div className="col-lg-6">
          <div className="row" style={{ display: "block" }}>
            <div>
              <img src={DecorImage} alt="" className="decor-img" />
            </div>
            <h1>&emsp; &emsp; &emsp; {t("Hello")}</h1>
            <h2>{t("I'm Nguyen")}</h2>
            <div>
              <img src={Logo} className="logo" alt=""></img>
            </div>
            {i18n.language === "jp" ? (
              <TypeAnimation
                sequence={[
                  "独学の開発者!",
                  1000,
                  "趣味は　コーディング",
                  1000,
                  "趣味は　言語学習",
                  1000,
                  "趣味は　猫！",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                  padding: "10px",
                }}
                repeat={Infinity}
              />
            ) : (
              <>
                <TypeAnimation
                  sequence={[
                    "A self-taught developer!",
                    1000,
                    "Interests in Coding",
                    1000,
                    "Interests in Languages",
                    1000,
                    "Interests in Cats",
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "1.5em",
                    display: "inline-block",
                    padding: "10px",
                  }}
                  repeat={Infinity}
                />
              </>
            )}
          </div>

          <div className="row">
            <Link
              to="https://www.facebook.com/nguyennguyenstudy101"
              className="contact-icon"
            >
              <FaSquareFacebook />
            </Link>
            <Link
              to="https://github.com/Nolongeruser9771"
              className="contact-icon"
            >
              <FaSquareGithub />
            </Link>
            <Link className="contact-icon">
              <FaSquareInstagram />
            </Link>
            <Link className="contact-icon">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="d-none col-lg-6 d-lg-block">
          <img src={WebDevelop} alt="" className="illustrate-image"></img>
        </div>
      </div>
    </div>
  );
}
