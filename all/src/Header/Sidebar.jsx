import React from "react";
import styled from "styled-components";
import { BiHide, BiHomeAlt } from "react-icons/bi";
import { FiPhoneOutgoing } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { TiBusinessCard } from "react-icons/ti";
import { BiBook } from "react-icons/bi";
import { useSelector } from "react-redux";
// import { BiMenuAltLeft } from "react-icons/bi";
import { app } from "../Base";
import {} from "react-icons/bi";
import { AuthContext } from "../AuthProvider.js";

import { Link } from "react-router-dom";
const Sidebar = ({ open, toggle }) => {
  const { current } = React.useContext(AuthContext);
  const data = useSelector((state) => state.myReducer.friend);
  const data1 = useSelector((state) => state.myReducer.family);
  const data2 = useSelector((state) => state.myReducer.business);
  const data3 = useSelector((state) => state.myReducer.private);
  return (
    <>
      <Div open={open}>
        <Holder>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span>
              <BiHomeAlt style={{ marginRight: "10px" }} />
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/Addcontact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <FiPhoneOutgoing style={{ marginRight: "10px" }} />
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/Friendcontact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <FaUserFriends style={{ marginRight: "10px" }} />
              <B>{data.length}</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/Familycontact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <BsPeople style={{ marginRight: "10px" }} />
              <B>{data1.length}</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/BusinessContact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <TiBusinessCard style={{ marginRight: "10px" }} />
              <B>{data2.length}</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/PrivateContact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <BiHide style={{ marginRight: "10px" }} />
              <B> {data3.length}</B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/TheCreator"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>
              <BiBook style={{ marginRight: "10px" }} />
              <B></B>
            </span>
          </Link>
          <hr></hr>
          <Link
            to="/SignupPage"
            style={{ textDecoration: "none", color: "black" }}
          >
            {current ? (
              <Button
                onClick={() => {
                  app.auth().signOut();
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Button>Sign up</Button>
            )}
          </Link>
          {/* <Display onClick={toggle}>
            <BiMenuAltLeft />
          </Display> */}
        </Holder>
      </Div>
    </>
  );
};

export default Sidebar;
const Div = styled.div`
  /* height: 900vh; */
  background-color: #f1f1ef;
  /* background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px); */

  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  width: 98px;
  /* opacity: ${({ open }) => (open ? "100%" : "0")};
  top: ${({ open }) => (open ? "0" : "-100%")}; */
  position: fixed;
`;
const Holder = styled.div`
  /* height: 30px; */
  height: 100vh;

  span {
    display: flex;
    flex-direction: row;
    padding: 25px 15px;
    justify-content: space-space-around;
    height: 3px;
    width: 45px;
    transform: scale(1);
    transition: all 350ms;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 20px;
    :hover {
      border-radius: 5px;
      height: 3px;
      width: 45px;
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
// const Display = styled.div`
//   flex: 1;
//   margin-top: 120px;
//   display: flex;
//   justify-content: center;
//   /* width: 160px; */
//   height: 60px;
//   font-size: 20px;
//   :hover {
//     border-radius: 5px;
//     height: 20px;
//     cursor: pointer;
//     /* border: 2px solid coral; */
//     color: white;
//     background-color: #ff7f50;
//     /* width: 160px; */
//   }
// `;
const B = styled.b`
  color: black;
  margin-left: 3px;
`;
const Button = styled.button`
  display: flex;
  margin: 34px 10px 34px 7px;
  padding: 10px 0 10px 20px;

  background-color: coral;
  border: none;
  height: 34px;
  width: 80px;
  border-radius: 5px;
  /* margin: -2px 10px 17px 15px; */
  color: black;

  :hover {
    background-color: lightskyblue;
    color: white;
    transform: scale(1);
    transition: all 350ms;
  }
`;
