import { Col, Row } from "react-bootstrap";
import "./Track.scss";

import { useState } from "react";
import TrackItem from "./TrackItem";

function Tracks({ data = [], type = "track", active = 0, onAddItemPlayList, onSortIdPlayList }) {
  const [activeTitle, setActiveTitle] = useState("asc");
  console.log(data);
  const handleSort = (type) => {
    setActiveTitle(type);
    onSortIdPlayList(type);
  };

  return (
    <div className="list">
      {type === "track" && data.length > 1 ? (
        <>
          <Row className="list-track">
            <Col xl={1} lg={1} md={1} xs={1} className="d-flex align-items-center">
              #
            </Col>
            <Col xl={7} lg={7} md={7} xs={7} className="d-flex align-items-center">
              <p>Title</p>
              <button
                onClick={() => handleSort("asc")}
                className={`text-center d-flex align-items-center ${activeTitle === "asc" ? "active" : ""}`}
              >
                <i className="fa-solid fa-caret-down" style={{ color: "#ccc" }}></i>
              </button>
              <button
                onClick={() => handleSort("desc")}
                className={`text-center d-flex align-items-center mt-1 ${activeTitle === "desc" ? "active" : ""}`}
              >
                <i className="fa-solid fa-caret-up" style={{ color: "#ccc" }}></i>
              </button>
            </Col>
            <Col xl={2} lg={2} md={2} xs={2}>
              Album
            </Col>
            <Col xl={2} lg={2} md={2} xs={2} className="d-flex align-items-center justify-content-center">
              <i class="fa-regular fa-clock"></i>
            </Col>
          </Row>
          <div className="divider opacity-75">
            <hr class="hr-text" />
          </div>

          <div className="mt-3">
            {data?.map((item, index) => (
              <TrackItem key={item.id} item={item} index={index * active + 1} onAddItemPlayList={onAddItemPlayList} />
            ))}
          </div>
        </>
      ) : (
        <Row className="list-inner p-4">
          {data?.map((item, index) => (
            <Col key={item.id} xs={6} md={4} lg={3} xl={2} className="p-0">
              <TrackItem item={item} index={index} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Tracks;
