import React, { useState } from "react";
import "./App.css";
import Sumo from "../src/img/Sumo.jpg";
import user from "../src/img/user.png";
import edit from "../src/img/edit.png";

import logout from "../src/img/log-out.png";
import { Link, useNavigate } from "react-router-dom";

function Id1() {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="s1">
        <div className="menu-container1">
          <div
            className="menu-trigger1"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={Sumo}></img>
          </div>

          <div className={`dropdown-menu1 ${open ? "active" : "inactive"}`}>
            <h3>The Sumo</h3>
            <ul>
              <DropdownItem1 img={user} text={"my Profile"} />
              <DropdownItem2 img={edit} text={"Edit Profile"} />
              <DropdownItem3 img={logout} text={"Logout"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem1(props) {
  return (
    <Link to="/">
      <li className="dropdownItem">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    </Link>
  );
}

function DropdownItem2(props) {
  return (
    <Link to="/editProfile">
      <li className="dropdownItem">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    </Link>
  );
}
function DropdownItem3(props) {
  return (
    <Link to="/">
      <li className="dropdownItem">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    </Link>
  );
}

export default Id1;
