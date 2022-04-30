import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import save from "./forhome.png";
// import tim from "./IMG-20210905-WA0006.jpg";
// import { Button } from "antd";
// import "antd/dist/antd.css";
// import firebase from "firebase";
import app from "../Base";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../Context";
import { AuthContext } from "../AuthProvider";
import { addFamily } from "../Context";
import { addBusines } from "../Context";
import { addPrivate } from "../Context.js";

const Homepage = () => {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.myReducer.contact);
  const [data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const fetchData = async () => {
    // const authUser = await app.auth().currentUser;
    await app
      .firestore()
      .collection("enter")
      .doc(currentUser.uid)
      .collection("each")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setData(r);
      });

    // if (authUser) {
    //   await app
    //     .firestore()
    //     .collection("enter")
    //     // .doc(authUser.uid)
    //     .onSnapshot((snapshot) => {
    //       const item = [];
    //       snapshot.forEach((doc) => {
    //         item.push({ ...doc.data(), id: doc.id });
    //       });
    //       setData(item);
    //     });
    // }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <Div>
      <br />

      <Profileholder>
        {data?.map((props, i) => (
          <Sub key={i}>
            <Name>
              Welcome{" "}
              <b style={{ color: "coral", fontWeight: "bolder" }}>
                {props.fullname}
              </b>{" "}
              👋
            </Name>

            <div>
              <Pics src={props.imge} />
              <span
                style={{
                  position: "absolute",
                  fontSize: "10px",
                  marginTop: "34px",
                  marginRight: "70px",
                }}
              >
                {" "}
                🟢
              </span>
            </div>
          </Sub>
        ))}
      </Profileholder>
      <Wrapper>
        <Imwrite>
          <Intin>
            <Text>Save Your Contacts Now And Forever... </Text>
          </Intin>

          <br />
          <br />

          <Imageholder>
            <Image src={save} alt="image" />
          </Imageholder>
        </Imwrite>
        <br />
        {/* <Writeup>View all your contact here</Writeup> */}

        <Cards>
          {data1?.map((props) => (
            <Card key={props.id}>
              <Two>
                <Cardimage src={props.image} alt="image" />
                <Forcard>
                  <Cardname>{props.name}</Cardname>

                  <Cardname>{props.lastName}</Cardname>
                </Forcard>
              </Two>
              <hr></hr>
              <Phonenumber>{props.phone}</Phonenumber>

              <But>
                <Button
                  onClick={() => {
                    dispatch(addFriend(props));
                  }}
                >
                  Add Friend
                </Button>
                <Button
                  onClick={() => {
                    dispatch(addPrivate(props));
                  }}
                >
                  Add Private
                </Button>
                <Button
                  onClick={() => {
                    dispatch(addFamily(props));
                  }}
                >
                  Add Family
                </Button>
                <Button
                  onClick={() => {
                    dispatch(addBusines(props));
                  }}
                >
                  Add Business
                </Button>
              </But>
            </Card>
          ))}
        </Cards>
      </Wrapper>
    </Div>
  );
};

export default Homepage;
const Forcard = styled.div`
  margin-right: 50px;
`;
const Div = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;
const Intin = styled.div`
  /* height: 100vh; */
  /* width: 200vh; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`;
const Text = styled.div`
  margin-left: 120px;
  font-size: 28px;
  font-weight: bolder;

  color: coral;
`;
const Imageholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-left: 90px;
  }
`;
const Image = styled.img`
  height: 400px;
  @media screen and (max-width: 768px) {
    height: 280px;
  }
  /* background: rgba(255, 255, 255, 0.25); */
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  /* backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(7px); */
  /* border-radius: 10px;
  border-radius: 5px rgba(255, 255, 255, 0.1); */
`;
const Card = styled.div`
  height: 260px;
  width: 253px;
  /* background-color: #dbdbce; */
  background-color: coral;
  /* border: 1px solid gray; */
  border-radius: 5px rgba(255, 255, 255, 0.1);
  margin: 20px;

  /* background: rgba(255, 255, 255, 0.25); */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  /* backdrop-filter: blur(4px); */
  /* -webkit-backdrop-filter: blur(4px); */
  border-radius: 7px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
`;
const Two = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 90px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
  }
`;
const Profileholder = styled.div``;
const Name = styled.div`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
`;
const Pics = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 25px;
  border: 1.4px solid coral;
  position: relative;
`;
const Sub = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 90px;
`;
const Imwrite = styled.div``;
const Cardimage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin: 10px 20px 10px 40px;
  border: 2px solid whitesmoke;
  object-fit: cover;
`;
const Cardname = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: #f1f1ef;
  cursor: pointer;
`;
const Phonenumber = styled.div`
  margin: -3px 10px 50px 60px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
const But = styled.div`
  margin-top: -33px;
  margin-left: 20px;
`;
const Button = styled.button`
  background-color: lightcyan;
  border: none;
  height: 30px;
  border-radius: 5px;
  margin: -2px 10px 17px 15px;
  color: black;
  font-size: auto;

  :hover {
    background-color: lightskyblue;
    color: white;
    border: none;
    transform: scale(1);
    transition: all 350ms;
  }
`;
// const Writeup = styled.div`
//   display: flex;
//   justify-content: center;
//   color: coral;
//   font-size: 20px;
//   font-weight: bold;
// `;
