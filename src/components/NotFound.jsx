import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>

      <p>
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <Link to="/" className="home-link">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;