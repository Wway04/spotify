import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";

import "./PlaylistModal.scss";
import { SidebarContext } from "../Sidebar";
import { PropTypes } from "prop-types";
function PlaylistModal({
  type = "add",
  playlistId,
  title,
  namePlaylist = "",
  descriptionPlaylist = "",
  isDelete,
  children,
}) {
  const { handleCreatePlaylist, handleEditPlaylist, handleDeletePlaylist } = useContext(SidebarContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(namePlaylist);
  const [description, setDescription] = useState(descriptionPlaylist);
  const [isError, setIsError] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSubmit = async () => {
    if (!name) {
      setIsError(true);
      return;
    }
    if (type === "add") {
      await handleCreatePlaylist(name, description);
    } else if (type === "edit") {
      await handleEditPlaylist(playlistId, name, description);
    } else if (type === "delete") {
      await handleDeletePlaylist(playlistId);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="playlist-modal">
      <button type="primary" onClick={showModal} className="bg-transparent border-0 w-100 p-0">
        {children}
      </button>
      <Modal
        show={isModalOpen}
        onHide={handleCancel}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isDelete ? (
            <form>
              <div className="form-group">
                <label hmltfor="inputName" className="my-1">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control "
                  id="inputName"
                  placeholder="Add a name"
                  value={name}
                  onChange={(e) => {
                    setIsError(false);
                    setName(e.target.value);
                  }}
                />
                {isError && (
                  <p id="show-error" className="text-danger">
                    Playlist name is required.
                  </p>
                )}
              </div>
              <div className="form-group">
                <label hmltFor="inputDescription" className="my-1">
                  Description
                </label>
                <textarea
                  type="description"
                  className="form-control mb-4"
                  id="inputDescription"
                  placeholder="Add an optional description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
          ) : (
            <p>Are you sure want to delete this playlist?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
PlaylistModal.propTypes = {
  type: PropTypes.string,
  playlistId: PropTypes.string,
  namePlaylist: PropTypes.string,
  descriptionPlaylist: PropTypes.string,
  onCreatePlaylist: PropTypes.func,
  onEditPlaylist: PropTypes.func,
};

export default PlaylistModal;
