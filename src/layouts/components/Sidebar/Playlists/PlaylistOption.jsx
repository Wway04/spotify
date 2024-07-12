import { PropTypes } from "prop-types";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import PlaylistModal from "./PlaylistModal";

function PlaylistOption({ playlistId, name, description }) {
  const test = () => {
    console.log("123");
  };
  return (
    <div className="playlist-option">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="fa-solid fa-ellipsis" style={{ color: "#ffffff" }}></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <PlaylistModal
            title="Edit playlist"
            type="edit"
            playlistId={playlistId}
            namePlaylist={name}
            descriptionPlaylist={description}
          >
            <Dropdown.Item eventKey="2">
              <i class="fa-solid fa-pen-to-square"></i>Edit
            </Dropdown.Item>
          </PlaylistModal>
          <PlaylistModal
            title="Delete playlist"
            type="delete"
            isDelete={true}
            playlistId={playlistId}
            namePlaylist={name}
            descriptionPlaylist={description}
          >
            <Dropdown.Item eventKey="3">
              <i class="fa-solid fa-trash"></i>Delete
            </Dropdown.Item>
          </PlaylistModal>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

PlaylistOption.propTypes = {
  playlistId: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
export default PlaylistOption;
