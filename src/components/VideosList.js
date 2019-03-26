import React, { Component } from "react";

import VideoThumb from "./VideoThumb";

class VideosList extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("inside list", this.props);
    return (
      <div className="videoList">
        <ul>
          {this.props &&
            this.props.videosList &&
            this.props.videosList.map(video => {
              return (
                <li>
                  <VideoThumb
                    video={video}
                    handleVideoThumbClick={this.props.handleVideoThumbClick}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default VideosList;
