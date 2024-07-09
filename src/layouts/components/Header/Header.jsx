import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-navigation">
          <button>
            <i className="fa-solid fa-chevron-left" style={{ color: "#ffffff" }}></i>
          </button>
          <button>
            <i className="fa-solid fa-chevron-right" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
        <div className="header-btns">
          <Link to="/login">
            <Button type="large">Sign up</Button>
          </Link>
          <Link to="/register">
            <Button type="large">Register</Button>
          </Link>
        </div>
      </div>
      <div className="mt-3 w-100 header-search-type">
        <div className="d-flex gap-2 types">
          <Button type="type">Track</Button>
          <Button type="type">Artists</Button>
          <Button type="type">Playlists</Button>
          <Button type="type">Albums</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
