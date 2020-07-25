import React, { useState, useRef, useEffect } from "react";
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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import SearchBox from "./SearchBox/SearchBox";
import SocialIcons from "../SocialIcons/SocialIcons";
import { FaGlobeAfrica } from "react-icons/fa";
import { ReactComponent as Brazil } from '../../assets/images/brazil.svg'
import { ReactComponent as Social } from '../../assets/images/blogger.svg'
import DestinationsMenuImages from "../DestinationsMenuImages/DestinationsMenuImages";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinationsOpen, setDestinationsIsOpen] = useState(false);
  const [isTopicsOpen, setTopicsIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const topicsToggle = () => {
    setTopicsIsOpen(!isTopicsOpen);
  };

  const destinationsToggle = () => {
    setDestinationsIsOpen(!isDestinationsOpen);
  };

  const history = useHistory();
  const goToHome = () => {
    history.push("/");
    window.location.href = "/";
  };

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
        {/* <NavbarToggler onClick={toggle} /> */}
        <Nav className="mr-auto" navbar>
          <Dropdown nav inNavbar isOpen={isDestinationsOpen} toggle={destinationsToggle}>
            <DropdownToggle
              nav
              style={{ color: "#054D55", marginLeft: "3rem" }}
            >
              {isDestinationsOpen ? (
                <div className={classes.MenuTitleOpen}
                >
                  DESTINATIONS
                  <FaCaretUp
                    className={classes.Play}
                  />
                </div>
              ) : (
                  <div className={classes.MenuTitle} >
                    DESTINATIONS
                  <FaCaretDown
                      className={classes.Play}
                    />
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
          </Dropdown>
          <Dropdown inNavbar isOpen={isTopicsOpen} toggle={topicsToggle}>
            <DropdownToggle
              nav
              style={{ color: "#054D55", marginLeft: "1rem" }}
            >
              {isTopicsOpen ? (
                <div className={classes.MenuTitleOpen}>
                  TOPICS
                  <FaCaretUp
                    className={classes.Play}
                  />
                </div>
              ) : (
                  <div className={classes.MenuTitle} >
                    TOPICS
                  <FaCaretDown
                      className={classes.Play}
                    />
                  </div>

                )}
            </DropdownToggle>
            <DropdownMenu
              className={classes.Center}
              style={{
                backgroundColor: "transparent",
                backgroundColor: "transparent",
                margin: ".5rem 0 0",
                border: "none",
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
                  style={{ height: "140px" }}
                >
                  <span className={classes.Text1}>soc</span>
                  <span style={{ color: "green" }}>
                    <Social width='30px' height='30px' />
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

                    < Brazil width='30px' height='30px' />
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
          </Dropdown>
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
