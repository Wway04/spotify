import _ from "lodash";

import Pagination from "react-bootstrap/Pagination";

import Preview from "../../components/Preview";
import Footer from "../../layouts/components/Footer";
import Sidebar from "../../layouts/components/Sidebar";
import "../../layouts/MainLayout/MainLayout.scss";
import "./Search.scss";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { spotifyAPIGet } from "../../utils/httpRequest";
import useDebounce from "../../hooks/useDebounce";
import PaginationCustom from "../../components/Pagination/Pagination";
import Tracks from "../../components/Track/Track";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function Search() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/login");
  };
  const [active, setActive] = useState(1);
  const [searchType, setSearchType] = useState("track");
  const [searchValue, setSearchValue] = useState();
  const [searchResult, setSearchResult] = useState();
  const searchData = useDebounce(searchValue, 500);
  const [searchResultSorted, setSearchResultSorted] = useState([]);

  const sortIdPlayList = (type) => {
    setSearchResultSorted(_.orderBy(searchResultSorted, ["duration_ms"], [type]));
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const result = await spotifyAPIGet("/search?", {
          params: {
            type: searchType,
            q: searchData,
            limit: 50,
          },
        });
        console.log(result);
        setSearchResult(result[`${searchType}s`].items);
      } catch (error) {
        console.error(error);
      }
    };
    handleSearch();
  }, [searchData, searchType]);

  useEffect(() => {
    const newSearchResult = [];
    searchResult?.forEach?.((item, index) => {
      if (index >= (active - 1) * 10 && index <= 10 * active - 1) {
        newSearchResult.push({ ...item });
      }
    });
    setSearchResultSorted(newSearchResult);
  }, [searchResult, active]);

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="container-custom">
        <div className="search-header">
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
              <div className="header-search">
                <div className="header-search-inner">
                  <input
                    type="text"
                    placeholder="What do you want to play?"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                  />
                  <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i>
                  </div>
                  <div
                    className="delete-icon"
                    role="button"
                    onClick={() => {
                      setSearchValue("");
                    }}
                  >
                    <i className="fa-solid fa-x" style={{ color: "#ffffff" }}></i>
                  </div>
                </div>
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
            <div className="mt-3 w-100 header-search-type">
              <div className="d-flex gap-2 types">
                <Button
                  type="type"
                  className={`${searchType === "track" ? "active" : ""}`}
                  onClick={() => setSearchType("track")}
                >
                  Track
                </Button>
                <Button
                  type="type"
                  className={`${searchType === "artist" ? "active" : ""}`}
                  onClick={() => setSearchType("artist")}
                >
                  Artists
                </Button>
                <Button
                  type="type"
                  className={`${searchType === "playlist" ? "active" : ""}`}
                  onClick={() => setSearchType("playlist")}
                >
                  Playlists
                </Button>
                <Button
                  type="type"
                  className={`${searchType === "album" ? "active" : ""}`}
                  onClick={() => setSearchType("album")}
                >
                  Albums
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div className="inner">
          <Tracks data={searchResultSorted} type={searchType} active={active} onSortIdPlayList={sortIdPlayList} />
          <PaginationCustom start={1} end={Math.ceil(searchResult?.length / 10)} onActive={setActive} />
        </div>
        <Footer />
      </div>
      <Preview />
    </div>
  );
}

export default Search;
