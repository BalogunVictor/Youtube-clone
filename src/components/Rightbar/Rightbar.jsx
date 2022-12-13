import "./Rightbar.scss";
import Video from "../Video/Video";

const Rightbar = ({ filteredVideo }) => {
  return (
    <div className="rightbar">
      <h1>Recommended</h1>
      {/*<Slide />*/}
      <div className="rightbarWrapper">
        {filteredVideo.map((v) => (
          <Video key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
};

export default Rightbar;
