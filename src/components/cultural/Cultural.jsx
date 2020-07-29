import React, { Component } from "react";
import sunrise from "../photos/sunrise.jpg";
// import "../blog.css";
import Architecture from "./Architecture";
import CulturalHeritage from "./CulturalHeritage";
import CulturalInteractions from "./CulturalInteractions";
import LocalCulture from "./LocalCulture";
import IllegalTrade from "./IllegalTrade";
import Landscape from "./Landscape";

class Cultural extends Component {
  state = {
    topic: 1,
    title: "",
  };

  handleCulturalInteractions = () => {
    this.setState({
      topic: 1,
      title: "cultural interactions",
    });
  };
  handleCulturalHeritage = () => {
    this.setState({
      topic: 2,
      title: "cultural heritage",
    });
  };
  handleLocalCulture = () => {
    this.setState({
      topic: 3,
      title: "local culture",
    });
  };
  handleIllegalTrade = () => {
    this.setState({
      topic: 4,
      title: "illegal trade",
    });
  };
  handleLandscape = () => {
    this.setState({
      topic: 5,
      title: "landscape",
    });
  };
  handleArchitecture = () => {
    this.setState({
      topic: 6,
      title: "architecture",
    });
  };

  componentDidMount = () => {
    this.setState({
      title: "cultural",
    });
  };

  render() {
    const displayTopicViews = () => {
      return (
        <>
          {this.state.topic === 1 ? (
            <CulturalInteractions />
          ) : this.state.topic === 2 ? (
            <CulturalHeritage />
          ) : this.state.topic === 3 ? (
            <LocalCulture />
          ) : this.state.topic === 4 ? (
            <IllegalTrade />
          ) : this.state.topic === 5 ? (
            <Landscape />
          ) : this.state.topic === 6 ? (
            <Architecture />
          ) : (
                        ""
                      )}
        </>
      );
    };

    return (
      <>
        <div>
          <img src={sunrise} alt="cultural" className="cultural-topic-image" />
          <div className="cultural-transparent-title">{this.state.title}</div>
          <div className="button-group">
            <button
              onClick={this.handleCulturalInteractions}
              className="categ-buttons"
            >
              cultural interactions
            </button>
            <button
              onClick={this.handleCulturalHeritage}
              className="categ-buttons"
            >
              cultrural heritage
            </button>
            <button onClick={this.handleLocalCulture} className="categ-buttons">
              local culture
            </button>
            <button onClick={this.handleIllegalTrade} className="categ-buttons">
              illegal trade
            </button>
            <button onClick={this.handleLandscape} className="categ-buttons">
              landscape
            </button>
            <button onClick={this.handleArchitecture} className="categ-buttons">
              architecture
            </button>
          </div>
          <div>{displayTopicViews()}</div>
        </div>
      </>
    );
  }
}

export default Cultural;
