import { useState } from "react";
import "./Home.scss";
import Track from "../../components/Track";
function Home() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  return (
    <div className="home">
      <div className="container">
        <section className="home-inner">
          <div className="home-heading">
            <h4>Spotify Playlists</h4>
            <a href="#">
              <span>Show all</span>
            </a>
          </div>
          <div className="home-body">
            <Track />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
