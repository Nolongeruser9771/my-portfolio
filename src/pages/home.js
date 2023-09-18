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

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div>
              <div className="">
                <img src={DecorImage} alt="" className="decor-img" />
              </div>
              <h1>Hello</h1>
              <h2>I'm Nguyen</h2>
              <div>
                <img src={Logo} className="logo" alt=""></img>
              </div>

              <TypeAnimation
                sequence={[
                  "A self-taught developer and IT-comtor!",
                  1000,
                  "Who gets interest in Coding",
                  1000,
                  "Who gets interest in Animes",
                  1000,
                  "Who gets interest in Cats",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1.5em", display: "inline-block", padding: "10px"}}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="row">
            <Link to="https://www.facebook.com/nguyennguyenstudy101" className="contact-icon">
              <FaSquareFacebook />
            </Link>
            <Link to="https://github.com/Nolongeruser9771" className="contact-icon">
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
