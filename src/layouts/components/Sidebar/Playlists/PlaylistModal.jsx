import { useState } from "react";

import "./PlaylistModal.scss";
function PlaylistModal({
  type = "add",
  playlistId,
  namePlaylist = "",
  descriptionPlaylist = "",
  children,
  onCreatePlaylist,
  onEditPlaylist,
}) {
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
      await onCreatePlaylist(name, description);
    } else {
      await onEditPlaylist(playlistId, name, description);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="playlist-modal">
      {type === "add" ? (
        <button type="primary" onClick={showModal} className="bg-transparent border-0">
          {children}
        </button>
      ) : (
        <p onClick={showModal} className="mb-0">
          {children}
        </p>
      )}
    </div>
  );
}

export default PlaylistModal;
