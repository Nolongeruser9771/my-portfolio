import Navigator from "./nav";
import './layout.css'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navigator />
      <div className="row">{children}</div>
    </div>
  );
}
