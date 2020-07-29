import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "../blog.css";
import goldencastle from "../photos/goldencastle.jpg";
import borabora from "../photos/borabora.jpg";
import oiasantorini from "../photos/oiasantorini.jpg";
import storehousetown from "../photos/storehousetown.jpg";
import veniceitaly from "../photos/veniceitaly.jpg";
import goldenbridge from "../photos/goldenbridge.jpg";
import lighthouse from "../photos/lighthouse.jpg";
import hamburg from "../photos/hamburg.jpg";

class FairWork extends Component {
  render() {
    const energyList = [
      {
        id: 1,
        image: goldencastle,
        tag: "#travel",
        topic:
          "Connecting hoteliers to the future of hospitality of I meet hotel",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 2,
        image: hamburg,
        tag: "#travel",
        topic:
          "The most influentialustainable travel trends of 2019 (besides Greta Thunberg)",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 3,
        image: oiasantorini,
        tag: "#travel",
        topic:
          "What is slow travel? Why you should take a pause and experience your next trip...",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 4,
        image: veniceitaly,
        tag: "#travel",
        topic: "5 ways you can help reduce over-tourism",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 5,
        image: goldenbridge,
        tag: "#travel",
        topic:
          "Connecting hoteliers to the future of hospitality of I meet hotel",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 6,
        image: borabora,
        tag: "#travel",
        topic:
          "The most influentialustainable travel trends of 2019 (besides Greta Thunberg)",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 7,
        image: storehousetown,
        tag: "#travel",
        topic:
          "What is slow travel? Why you should take a pause and experience your next trip...",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
      {
        id: 8,
        image: lighthouse,
        tag: "#travel",
        topic: "5 ways you can help reduce over-tourism",
        team: "Team OPR member",
        date: "Dec 26, 2019",
      },
    ];

    return (
      <>
        <div className="energy-container">
          <Row>
            {energyList.map((item, i) => {
              return (
                <Col
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                  key={item.id}
                  // style={{ margin: 0, padding: 0 }}
                >
                  <div className="cultural-categ-container">
                    <img
                      className="energy-grid-image"
                      src={item.image}
                      alt="energy"
                    />
                    <div className="energy-tag">{item.tag}</div>
                    <div className="energy-topic">{item.topic}</div>
                    <div className="energy-team-date">
                      <div className="energy-team">{item.team}</div>
                      <div className="energy-date">{item.date}</div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          <div className="read-more-container">
            <button className="read-more-button">read more</button>
          </div>
        </div>
      </>
    );
  }
}

export default FairWork;
