import React, { useState } from "react";
import classes from "./Header.module.css";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { ReactComponent as Drop } from "../../assets/images/header_shape.svg";

import {
  Collapse,
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

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={classes.Header}>
      <Navbar expand="md" style={{ padding: "0 2rem", color: "#054D55" }}>
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
              DESTINATIONS <FaPlay className={classes.Play} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Destination 1</DropdownItem>
              <DropdownItem>Destination 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              nav
              style={{ color: "#054D55", marginLeft: "1rem" }}
            >
              TOPICS <FaPlay className={classes.Play} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Topic 1</DropdownItem>
              <DropdownItem>Topic 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavbarText>
            <span className={classes.Navbartext}>one planet rating</span>
          </NavbarText>
        </Nav>
        <Navbar>
          <SearchBox />
          <SocialIcons />
        </Navbar>
      </Navbar>
      <div style={{ position: "relative" }}>
        <div className={classes.Drop}>
          <Drop />
        </div>
        <img
          className={classes.Logo}
          src={require("../../assets/images/logo_transparent.png")}
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default Header;
