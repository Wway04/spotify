import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import "./Header.scss";

function Header() {
  const token = localStorage.getItem("token");

  console.log("🚀 ~ Header ~ token:", token);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

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
          {token ? (
            <Button onClick={handleLogout}>Log out</Button>
          ) : (
            <>
              <Link to="/login">
                <Button type="large">Sign up</Button>
              </Link>
              <Link to="/register">
                <Button type="large">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
