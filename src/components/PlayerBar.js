import React, { Component } from 'react'

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">

        <section id="button">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-md-rewind"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? "ion-md-pause" : "ion-md-play"}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-md-fastforward"></span>
          </button>
        </section>

        <section id="time-control">
          <div className="current-time">-:--</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">-:--</div>
        </section>

        <section id="volume-control">
          <div className="ion-md-volume-low"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="ion-md-volume-high"></div>
        </section>

      </section>
    )
  }
}

export default PlayerBar