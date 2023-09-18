import { Link, useLocation } from "react-router-dom";

export default function Navigator() {
  let location = useLocation().pathname;
  console.log(location);
  const navbar = [
    {
      pathname: "/home",
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
  
  return (
    <div className="container">
      <div className="row nav">
        <div className="col-6" />
        <div className="col-6">
          <div className="row navbar">
            {navbar.map((nav, index) => (
              <div key={index} className={location===nav.pathname? "col btn active" : "col btn"}>
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
