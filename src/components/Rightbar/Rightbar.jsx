import "./Rightbar.scss"

const Rightbar = () => {
  return (
    <div className="rightbar">
    
    <div className="videos">
    <h1>Recommended</h1>

    <div class="videosContainer">

      <div className="video">
        <div className="videoThumbnail">
          <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
        </div>
        <div className="videoDetails">
          <div className="author">
            <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
          </div>
          <div className="title">
            <h3>
              Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
            </h3>
            <span>FutureCoders</span>
            <span>10M Views • 3 Months Ago</span>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>
  )
} 

export default Rightbar