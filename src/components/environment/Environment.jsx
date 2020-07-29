import React, { Component } from "react";
import Maldives from "../../assets/photos/maldives.jpg";
// import "../blog.css";
import Energy from "./Energy";
import Water from "./Water";
import Waste from "./Waste";
import Food from "./Food";
import Transport from "./Transport";
import Pollution from "./Pollution";
import Conservation from "./Conservation";
import Certifications from "./Certifications";

class Environment extends Component {
  state = {
    topic: 1,
    title: "",
  };

  componentDidMount = () => {
    this.setState({
      title: "environmental",
    });
  };

  handleEnergy = () => {
    this.setState({
      topic: 1,
      title: "energy",
    });
  };
  handleWater = () => {
    this.setState({
      topic: 2,
      title: "water",
    });
  };
  handleWaste = () => {
    this.setState({
      topic: 3,
      title: "waste",
    });
  };
  handleFood = () => {
    this.setState({
      topic: 4,
      title: "food",
    });
  };
  handleTransport = () => {
    this.setState({
      topic: 5,
      title: "transport",
    });
  };
  handlePollution = () => {
    this.setState({
      topic: 6,
      title: "pollution",
    });
  };
  handleConservation = () => {
    this.setState({
      topic: 7,
      title: "conservation",
    });
  };
  handleCertifications = () => {
    this.setState({
      topic: 8,
      title: "certifications",
    });
  };

  render() {
    const displayTopicViews = () => {
      return (
        <>
          {this.state.topic === 1 ? (
            <Energy />
          ) : this.state.topic === 2 ? (
            <Water />
          ) : this.state.topic === 3 ? (
            <Waste />
          ) : this.state.topic === 4 ? (
            <Food />
          ) : this.state.topic === 5 ? (
            <Transport />
          ) : this.state.topic === 6 ? (
            <Pollution />
          ) : this.state.topic === 7 ? (
            <Conservation />
          ) : this.state.topic === 8 ? (
            <Certifications />
          ) : (
                            ""
                          )}
        </>
      );
    };

    return (
      <>
        <div>
          <img src={Maldives} alt="cultural" className="cultural-topic-image" />
          <div className="environmental-transparent-title">
            {this.state.title}
          </div>
          <div className="button-group">
            <button onClick={this.handleEnergy} className="categ-buttons">
              energy
            </button>
            <button onClick={this.handleWater} className="categ-buttons">
              water
            </button>
            <button onClick={this.handleWaste} className="categ-buttons">
              waste
            </button>
            <button onClick={this.handleFood} className="categ-buttons">
              food
            </button>
            <button onClick={this.handleTransport} className="categ-buttons">
              transport
            </button>
            <button onClick={this.handlePollution} className="categ-buttons">
              pollution
            </button>
            <button onClick={this.handleConservation} className="categ-buttons">
              conservation
            </button>
            <button
              onClick={this.handleCertifications}
              className="categ-buttons"
            >
              certifications
            </button>
          </div>
          <div>{displayTopicViews()}</div>
        </div>
      </>
    );
  }
}

export default Environment;
