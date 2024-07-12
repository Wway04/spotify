import PlaylistItem from "./PlaylistItem";
import "./Playlists.scss";
import { PropTypes } from "prop-types";
function Playlists({ playlists = [] }) {
  return (
    <div className="playlists">
      {playlists?.map((item) => (
        <PlaylistItem key={item.id} playlist={item} />
      ))}
    </div>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.array,
};

export default Playlists;
