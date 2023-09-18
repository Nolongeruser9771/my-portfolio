import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <div>
        <Link to="/home">Back To Home</Link>
      </div>
    </div>
  );
}
