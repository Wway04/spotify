import { createContext, memo } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../../components/Button";
import PlaylistModal from "./Playlists/PlaylistModal";
import "./Sidebar.scss";

export const SidebarContext = createContext();

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="inner-sidebar">
        <div className="section section-heading">
          <div className="nav-logo">
            <img src={require("../../../assets/image/spotify_logo.jpg")} alt="" width={"78px"} height={"24px"} />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <i className="fa-solid fa-house fa-lg"></i>Home
            </div>
            <div className="nav-item">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>Search
            </div>
          </div>
        </div>
        <div className="section section-body">
          <div className="nav-item library">
            <div className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-chart-bar" style={{ color: "#ffffff" }}></i>
              Your library
            </div>
            <div className="add-playlist" role="button">
              <PlaylistModal type="add">
                <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
              </PlaylistModal>
            </div>
          </div>
          <div className="suggests">
            <div className="suggest">
              <h6>Create your first playlist</h6>
              <p className="suggest-description">It's easy, we'll help you</p>
              <Button>Create playlist</Button>
            </div>
            <div className="suggest">
              <h6>Create your first playlist</h6>
              <p className="suggest-description">It's easy, we'll help you</p>
              <Button>Browse podcasts</Button>
            </div>
          </div>
          <div className="sidebar-footer">
            <div className="legal-links">
              <div className="links">
                <div className="link">
                  <a href="/">Legal</a>
                </div>
                <div className="link">
                  <a href="/">Safety & Privacy Center</a>
                </div>
                <div className="link">
                  <a href="/">Privacy Policy</a>
                </div>
                <div className="link">
                  <a href="/">Cookies</a>
                </div>
                <div className="link">
                  <a href="/">About Ads</a>
                </div>
                <div className="link">
                  <a href="/">Accessibility</a>
                </div>
              </div>
              <div className="cookies">
                <a href="/">Cookies</a>
              </div>
            </div>
            <div className="legal-btn">
              <Button>English</Button>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default memo(Sidebar);
