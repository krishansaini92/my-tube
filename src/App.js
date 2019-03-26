import React, { Component } from "react";
import search from "youtube-search";

import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videosList: [],
      selectedVideo: {}
    };
  }

  async componentDidMount() {
    await this.fetchVideos("");
  }

  fetchVideos = async searchText => {
    console.log("About to fetch videos");
    const { results } = await search(searchText, {
      maxResults: 10,
      key: "AIzaSyB6R76N65Z_gUghUTe6atveR5ohNuUCuJ8"
    });

    this.setState({
      videosList: results,
      selectedVideo: results[0]
    });
  };

  handleVideoThumbClick = video => {
    this.setState(prevState => {
      return {
        videosList: prevState.videosList,
        selectedVideo: video
      };
    });
  };

  render() {
    return (
      <div>
        <Header fetchVideos={this.fetchVideos} />
        <MainContent
          videosList={this.state.videosList}
          selectedVideo={this.state.selectedVideo}
          handleVideoThumbClick={this.handleVideoThumbClick}
        />
      </div>
    );
  }
}

export default App;
