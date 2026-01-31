import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="navbar">
        <h2 className="nav-title">BookStore</h2>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Books</Link>
            <Link to="/add">Add Book</Link>
        </div>
      </nav>
    );
  }
  
  export default NavBar;