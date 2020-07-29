import React, { Component } from "react";
import storehousetown from "../photos/storehousetown.jpg";
// import "../blog.css";
import LocalEmployment from "./LocalEmployment";
import LocalSourcing from "./LocalSourcing";
import Exploitation from "./Exploitation";
import FairWork from "./FairWork";
import Equality from "./Equality";
import Accessibility from "./Accessibility";
import CommunitySupport from "./CommunitySupport";
import { FaThemeisle } from "react-icons/fa";

class Social extends Component {
  state = {
    topic: 1,
    title: "",
  };

  handleLocalEmployment = () => {
    this.setState({
      topic: 1,
      title: "local employment",
    });
  };
  handleLocalSourcing = () => {
    this.setState({
      topic: 2,
      title: "local sourcing",
    });
  };
  handleExploitation = () => {
    this.setState({
      topic: 3,
      title: "exploitation",
    });
  };
  handleFairWork = () => {
    this.setState({
      topic: 4,
      title: "fair work",
    });
  };
  handleEquality = () => {
    this.setState({
      topic: 5,
      title: "equality",
    });
  };
  handleAccessibility = () => {
    this.setState({
      topic: 6,
      title: "accessibility",
    });
  };
  handleCommunitySupport = () => {
    this.setState({
      topic: 7,
      title: "community support",
    });
  };

  componentDidMount = () => {
    this.setState({
      title: "social",
    });
  };

  render() {
    const displayTopicViews = () => {
      return (
        <>
          {this.state.topic === 1 ? (
            <LocalEmployment />
          ) : this.state.topic === 2 ? (
            <LocalSourcing />
          ) : this.state.topic === 3 ? (
            <Exploitation />
          ) : this.state.topic === 4 ? (
            <FairWork />
          ) : this.state.topic === 5 ? (
            <Equality />
          ) : this.state.topic === 6 ? (
            <Accessibility />
          ) : this.state.topic === 7 ? (
            <CommunitySupport />
          ) : (
                          ""
                        )}
        </>
      );
    };

    return (
      <>
        <div>
          <img
            src={storehousetown}
            alt="cultural"
            className="cultural-topic-image"
          />
          <div className="social-transparent-title">{this.state.title}</div>
          <div className="button-group">
            <button
              onClick={this.handleLocalEmployment}
              className="categ-buttons"
            >
              local employment
            </button>
            <button
              onClick={this.handleLocalSourcing}
              className="categ-buttons"
            >
              local sourcing
            </button>
            <button onClick={this.handleExploitation} className="categ-buttons">
              exploitation
            </button>
            <button onClick={this.handleFairWork} className="categ-buttons">
              fair work
            </button>
            <button onClick={this.handleEquality} className="categ-buttons">
              equality
            </button>
            <button
              onClick={this.handleAccessibility}
              className="categ-buttons"
            >
              accessibility
            </button>
            <button
              onClick={this.handleCommunitySupport}
              className="categ-buttons"
            >
              community support
            </button>
          </div>
          <div>{displayTopicViews()}</div>
        </div>
      </>
    );
  }
}

export default Social;
