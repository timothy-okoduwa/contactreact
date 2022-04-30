import React from "react";
import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { FiPhoneOutgoing } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { TiBusinessCard } from "react-icons/ti";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
// import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Header = ({ toggle, open }) => {
  return (
    <>
      {/* <Fade left> */}
      <Div open={open}>
        <Holder>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span>
              <BiHomeAlt style={{ marginRight: "10px" }} />
              home
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/Addcontact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <FiPhoneOutgoing style={{ marginRight: "10px" }} />
              add contacts
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/Friendcontact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <FaUserFriends style={{ marginRight: "10px" }} />
              friend contact
              <br />
              <B> 6</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/Familycontact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <BsPeople style={{ marginRight: "10px" }} />
              family contact <B> 4</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/BusinessContact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <TiBusinessCard style={{ marginRight: "10px" }} />
              business Contact <B> 1</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/PrivateContact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <BiHide style={{ marginRight: "10px" }} />
              Private Contact <B> 6</B>
            </span>
          </Link>
          <Link
            to="/SignupPage"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button>Sign Up</Button>
          </Link>
          <Display onClick={toggle}>
            <BiMenuAltLeft />
          </Display>
        </Holder>
      </Div>
      {/* </Fade> */}
    </>
  );
};

export default Header;
const Div = styled.div`
  height: 200vh;
  background-color: #f1f1ef;

  width: 170px;
  position: fixed;
  opacity: ${({ open }) => (open ? "0" : "100%")};
  top: ${({ open }) => (open ? "-100%" : "0")};
`;
const Holder = styled.div`
  span {
    display: flex;
    flex-direction: row;
    padding: 25px 15px;
    justify-content: space-space-around;
    height: 10px;
    color: black;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 20px;
    :hover {
      border-radius: 5px;
      height: 10px;
      cursor: pointer;
      /* border: 2px solid coral; */
      color: white;
      background-color: #ff7f50;
      transform: scale(1);
      transition: all 350ms;
      B {
        color: white;
      }
    }
  }
`;
const Display = styled.div`
  flex: 1;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  width: 160px;
  height: 60px;
  font-size: 20px;
  :hover {
    border-radius: 5px;
    height: 20px;
    cursor: pointer;
    /* border: 2px solid coral; */
    color: white;
    background-color: #ff7f50;
    width: 160px;
  }
`;
const B = styled.b`
  color: black;
  margin-left: 3px;
`;
const Button = styled.button`
  display: flex;
  margin: 34px 30px 34px 40px;
  padding: 10px 0 10px 20px;

  background-color: coral;
  border: none;
  height: 34px;
  width: 80px;
  border-radius: 5px;
  /* margin: -2px 10px 17px 15px; */
  color: black;
  font-size: auto;

  :hover {
    background-color: lightskyblue;
    color: white;
    transform: scale(1);
    transition: all 350ms;
  }
`;
