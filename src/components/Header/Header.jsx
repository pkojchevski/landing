import React, { useState } from "react";
import classes from "./Header.module.css";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
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

} from "reactstrap";

import SearchBox from "./SearchBox/SearchBox";
import SocialIcons from "../SocialIcons/SocialIcons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={classes.Header}>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <FaHome />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                DESTINATONS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Destination 1</DropdownItem>
                <DropdownItem>Destination 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                TOPICS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Topic 1</DropdownItem>
                <DropdownItem>Topic 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Navbar>
            <SearchBox />
            <div className={classes.SocialIcons}>
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
            </div>
            <SocialIcons/>
          </Navbar>
        </Collapse>
      </Navbar>
      <div style={{ position: "relative" }}>
        <div className={classes.Drop}>
          <Drop />
        </div>
        
      </div>
    </div>
  );
}

export default Header;
