import WebDevelop from "../../src/assets/images/home_illustation.png";
import DecorImage from "../assets/images/web_logo.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

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
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div>
              <div className="">
                <img src={DecorImage} alt="" className="decor-img" />
              </div>
              <h1>{t("Hello")}</h1>
              <h2>{t("I'm Nguyen")}</h2>
              <div>
                <img src={Logo} className="logo" alt=""></img>
              </div>

              <TypeAnimation
                sequence={[
                  t('introduce-1'),
                  1000,
                  t('introduce-2'),
                  1000,
                  t('introduce-3'),
                  1000,
                  t('introduce-4'),
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
            </div>
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
        <div className="col-6">
          <img src={WebDevelop} alt="" className="illustrate-image"></img>
        </div>
      </div>
    </div>
  );
}
