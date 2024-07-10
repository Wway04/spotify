import { useEffect, useRef, useState } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { handleValidate } from "../../functions/handleValidate";
import { spotifyAPIGet } from "../../utils/httpRequest";

const CLIENT_ID = "bcb629904e374fdfb0f99db29dd3e8a3";
const REDIRECT_URI = "http://localhost:3000/login";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function Login() {
  // Get user id spotify account
  const getUserId = async (token) => {
    try {
      const { id } = await spotifyAPIGet("/me");
      localStorage.setItem("user_id", id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Get token spotify account information from server and retrieve user information from server using token information
  useEffect(() => {
    async function getTokenAndIdUser() {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");
      if (!token && hash) {
        token = hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          .split("=")[1];
        window.location.hash = "";
        localStorage.setItem("token", token);
        if (!localStorage.getItem("user_id")) {
          await getUserId(token);
        }
        navigate("/");
      }
    }
    getTokenAndIdUser();
  }, []);

  const navigate = useNavigate();

  // inputs form
  const emailInput = useRef();
  const passwordInput = useRef();

  // information login form
  const [email, setEmail] = useState();

  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [password, setPassword] = useState();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const [isError, setIsError] = useState(false);

  const [isShowPassword, setIsShowPassword] = useState(false);

  // handle onchange event for email and password errors
  const handleEmail = (e) => {
    setIsError(false);
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setIsError(false);
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmail = handleValidate("email", email);
    const isPassword = handleValidate("password", password);
    if (!isEmail.isValid || !isPassword.isValid) {
      setEmailErrorMessage(isEmail.message);
      setPasswordErrorMessage(isPassword.message);
      setIsError(true);
      emailInput.current.focus();
      console.log("test");
      return;
    }
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-private`;
  };

  return (
    <div className="login">
      <>
        <header className="login-header">
          <Link to="/">
            <img src={require("../../assets/image/spotify_logo.jpg")} alt="" width="117px" height="36px" />
          </Link>
        </header>
        <main className="login-main">
          <div className="login-inner">
            <div className="login-title">
              <h1>Log in to Spotify</h1>
            </div>
            {isError && (
              <div
                className="w-100 d-flex align-items-center justify-content-center errror-banner"
                style={{ backgroundColor: "#e91529" }}
              >
                <div className="errror-banner-inner">
                  <i className="fa-solid fa-circle-exclamation" style={{ color: "#ffffff" }}></i>
                  <span>Incorrect username or password.</span>
                </div>
              </div>
            )}
            <div className="w-75 login-divider" style={{ height: "28px" }}></div>
            <form className="login-form">
              <div className={`login-form-group ${emailErrorMessage ? "error" : ""}`}>
                <label htmlFor="email">
                  Email or username
                  <span
                    role="button"
                    onClick={() => {
                      setIsError(false);
                      setEmailErrorMessage("");
                      setPasswordErrorMessage("");
                      setEmail("wway04@gmail.com");
                    }}
                  >
                    (wway04@gmail.com)
                  </span>
                </label>
                <input
                  ref={emailInput}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={handleEmail}
                  onBlur={() => handleValidate("email", email)}
                />
                {emailErrorMessage && (
                  <p id="error-message" style={{ fontSize: "14px", fontWeight: 400 }}>
                    <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f90101" }}></i>
                    {emailErrorMessage}
                  </p>
                )}
              </div>
              <div className={`login-form-group ${passwordErrorMessage ? "error" : ""}`}>
                <label htmlFor="password">
                  Password
                  <span
                    role="button"
                    onClick={() => {
                      setIsError(false);
                      setEmailErrorMessage("");
                      setPasswordErrorMessage("");
                      setPassword("123123123");
                    }}
                  >
                    (123123123)
                  </span>
                </label>
                <div className="password-input">
                  <input
                    autoComplete="on"
                    ref={passwordInput}
                    type={`${isShowPassword ? "text" : "password"}`}
                    id="password"
                    name="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={handlePassword}
                    onBlur={() => handleValidate("password")}
                  />
                  <div
                    role="button"
                    className="showpass-icon"
                    onClick={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                  >
                    {isShowPassword ? (
                      <i className="fa-solid fa-eye" style={{ color: "#ffffff" }}></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash" style={{ color: "#ffffff" }}></i>
                    )}
                  </div>
                </div>
                {passwordErrorMessage && (
                  <p id="error-message" style={{ fontSize: "14px", fontWeight: 400 }}>
                    <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f90101" }}></i>{" "}
                    {passwordErrorMessage}
                  </p>
                )}
              </div>
              <button onClick={handleSubmit}>Login to Spotify</button>
              <div className="text-center mt-4 hover-link forgot-password ">
                <a href="#">Forgot your password?</a>
              </div>
            </form>
            <div className="w-75 login-divider" style={{ height: "28px" }}></div>
            <div className="navigation-register hover-link">
              <p>
                <span>Don't have an account?</span>
                <Link to="/register">Sign up for Spotify</Link>
              </p>
            </div>
          </div>
        </main>
        <footer className="login-footer">
          <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
        </footer>
      </>
    </div>
  );
}

export default Login;
