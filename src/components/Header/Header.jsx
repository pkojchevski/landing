import React, { useState } from "react";
import classes from "./Header.module.css";
import { FaHome } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import SearchBox from "./SearchBox/SearchBox";
import SocialIcons from "../SocialIcons/SocialIcons";
import { FaGlobeAfrica } from "react-icons/fa";
import DestinationsMenuImages from "../DestinationsMenuImages/DestinationsMenuImages";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [destinationsIsOpen, setDestinationsIsOpen] = useState(false);
  const [topicsIsOpen, setTopicsIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    setDestinationsIsOpen(!destinationsIsOpen);
    setTopicsIsOpen(!topicsIsOpen);
    console.log("toggle");
  };
  const destinationsToggle = () => {
    setDestinationsIsOpen(!destinationsIsOpen);
  };

  const topicsToggle = () => {
    setTopicsIsOpen(!topicsIsOpen);
  };
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
    window.location.href = "/";
  };

  console.log("isOpen:", isOpen);
  return (
    <div className={classes.Header}>
      <Navbar
        expand="md"
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          color: "#054D55",
          position: "relative",
        }}
      >
        <NavbarBrand href="/">
          <FaHome style={{ color: "#054D55", marginTop: "-4px" }} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              nav
              style={{ color: "#054D55", marginLeft: "3rem" }}
            >
              {destinationsIsOpen ? (
                <div
                  className={classes.MenuTitleOpen}
                  onClick={destinationsToggle}
                >
                  DESTINATIONS
                  <FaCaretUp className={classes.Play} />
                </div>
              ) : (
                <div className={classes.MenuTitle}>
                  DESTINATIONS
                  <FaCaretDown className={classes.Play} />
                </div>
              )}
            </DropdownToggle>
            <DropdownMenu
              style={{
                backgroundColor: "transparent",
                margin: ".5rem 0 0",
                border: "none",
                width: "500px",
              }}
            >
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.88)",
                }}
              >
                <div
                  className={classes.DestinationsMenuItem}
                  style={{ height: "70px" }}
                >
                  <p className={classes.DestinationsCitiesText}>Cities</p>
                </div>
                <DestinationsMenuImages />
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.75)",
                }}
              >
                <div
                  className={classes.DestinationsMenuItem}
                  style={{ height: "140px", alignItems: "flex-end" }}
                >
                  <p className={classes.DestinationsText}>Hotels</p>
                </div>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,.67)",
                }}
              >
                <div
                  className={classes.DestinationsMenuItem}
                  style={{ height: "50px" }}
                >
                  <p className={classes.DestinationsText}>Restaurants</p>
                </div>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.52)",
                }}
              >
                <div
                  className={classes.DestinationsMenuItem}
                  style={{ height: "30px" }}
                ></div>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              nav
              style={{ color: "#054D55", marginLeft: "1rem" }}
            >
              {topicsIsOpen ? (
                <div
                  className={classes.MenuTitleOpen}
                  onClick={() => topicsToggle()}
                >
                  TOPICS
                  <FaCaretUp className={classes.Play} />
                </div>
              ) : (
                <div
                  className={classes.MenuTitle}
                  onClick={() => topicsToggle()}
                >
                  TOPICS
                  <FaCaretDown className={classes.Play} />
                </div>
              )}
            </DropdownToggle>
            <DropdownMenu
              style={{
                backgroundColor: "transparent",
              }}
            >
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.88)",
                }}
              >
                <div
                  className={classes.TopicMenuItem}
                  style={{ height: "70px" }}
                >
                  <span className={classes.Text1}>envir</span>
                  <span style={{ color: "green" }}>
                    <FaGlobeAfrica />
                  </span>
                  <span className={classes.Text2}>nment</span>
                </div>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.75)",
                }}
              >
                <div
                  className={classes.TopicMenuItem}
                  style={{ height: "100px" }}
                >
                  <span className={classes.Text1}>soc</span>
                  <span style={{ color: "green" }}>
                    <FaGlobeAfrica />
                  </span>
                  <span className={classes.Text2}>al</span>
                </div>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.67)",
                }}
              >
                <div
                  className={classes.TopicMenuItem}
                  style={{ height: "50px" }}
                >
                  <span className={classes.Text1}>cul</span>
                  <span style={{ color: "green" }}>
                    <FaGlobeAfrica />
                  </span>
                  <span className={classes.Text2}>ural</span>
                </div>
              </DropdownItem>
              <DropdownItem
                style={{
                  backgroundColor: "rgba(255, 255,255,0.52)",
                }}
              >
                <div
                  className={classes.TopicMenuItem}
                  style={{ height: "30px" }}
                ></div>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavbarText>
            <a
              target="_blank"
              href="https://oneplanetrating.org/"
              className={classes.Navbartext}
            >
              one planet rating
            </a>
          </NavbarText>
        </Nav>
        <Navbar>
          <SearchBox />
          <SocialIcons />
        </Navbar>
      </Navbar>
      <div>
        <div className={classes.Drop}>
          {/* <Drop /> */}
          <img
            className={classes.Headerdrop}
            src={require("../../assets/images/header_shape.png")}
          ></img>
          <img
            className={classes.Logo}
            src={require("../../assets/images/logo_transparent.png")}
            alt="logo"
            onClick={goToHome}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
