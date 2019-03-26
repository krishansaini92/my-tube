import React, { Component } from "react";

class VideoDetail extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div className="videoDetail">
        <iframe
          width="720"
          height="480"
          src={`https://www.youtube.com/embed/${this.props.video.id}`}
          allowFullScreen
        />
        <p>{this.props.video.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
