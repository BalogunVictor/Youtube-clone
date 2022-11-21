import "./Video.scss"

const Video = ({video}) => {

  console.log(video);
  
  return (
    <div className="video">
    
    <div className="videos">
    <div className="videosContainer">
      <div className="video">
        <div className="videoThumbnail">
          <img src={video.videoImages} alt="" />
        </div>
        <div className="videoDetails">
          <div className="author">
            <img src={video.authorImages} alt="" />
          </div>
          <div className="title">
            <h3>
              {video.title}
            </h3>
            <span>{video.channel}</span>
            <span>{video.views}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Video