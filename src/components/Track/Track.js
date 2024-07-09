import { Col, Row } from "react-bootstrap";
import "./Track.scss";

import { useState } from "react";
import TrackItem from "./TrackItem";

function Tracks({ data = [], type = "track", onAddItemPlayList, onSortDurationPlayList, onPaginationsPlayList }) {
  const [activeTitle, setActiveTitle] = useState("");

  const handleSort = (type) => {
    setActiveTitle(type);
    onSortDurationPlayList(type);
  };

  return (
    <div className="list">
      {type === "track" && data.length > 1 ? (
        <>
          <Row className="list-track">
            <Col xl={1} lg={1} md={1} xs={1}>
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
            <Col xl={2} lg={2} md={2} xs={2} className="d-flex justify-content-center">
              Duration
            </Col>
          </Row>
          <div className="mt-3"></div>
        </>
      ) : (
        <Row className="list-inner p-4">
          {data?.map((item) => (
            <Col key={item.id} xs={6} md={4} lg={3} xl={2} className="p-0">
              <TrackItem item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Tracks;
