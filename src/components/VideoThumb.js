import React, { Component } from "react";

class VideoThumb extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={() => this.props.handleVideoThumbClick(this.props.video)}>
        <h5>{this.props.video.title}</h5>
        <img src={this.props.video.thumbnails.high.url} />
      </div>
    );
  }
}

export default VideoThumb;
