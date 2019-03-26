import React, { Component } from "react";

class Header extends Component {
  _handleKeyPress = async e => {
    if (e.key === "Enter") {
      await this.props.fetchVideos(e.target.value);
    }
  };

  render() {
    return (
      <header>
        <h1 onClick={() => this.props.fetchVideos("")}>MyTube</h1>
        <div>
          <input
            type="text"
            placeholder="Search here"
            onKeyPress={this._handleKeyPress}
          />
        </div>
      </header>
    );
  }
}

export default Header;
