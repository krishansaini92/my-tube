import React, { Component } from "react";

import VideoDetail from "./VideoDetail";
import VideosList from "./VideosList";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VideoDetail video={this.props.selectedVideo} />
        <VideosList
          videosList={this.props.videosList}
          handleVideoThumbClick={this.props.handleVideoThumbClick}
        />
      </div>
    );
  }
}

export default MainContent;
