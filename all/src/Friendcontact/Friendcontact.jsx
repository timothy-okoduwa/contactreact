import React from "react";
import styled from "styled-components";
// import tim from "./feranmi.jpg";
import friend from "./forfriends.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFriend } from "../Context";
const Friendcontact = () => {
  const data = useSelector((state) => state.myReducer.friend);
  const dispatch = useDispatch();
  return (
    <div>
      <Text>All your Friend Contacts!!! </Text>
      <br />

      <Forphoto>
        <Photo src={friend} alt="image" />
      </Forphoto>
      <br />
      <br />
      <br />

      <Div>
        <Holoder>
          <Cards>
            {" "}
            {data.map((props) => (
              <Card>
                <Two>
                  <Cardimage src={props.image} alt="image" />
                  <div>
                    <Cardname>{props.name}</Cardname>
                    <Cardname>{props.lastName}</Cardname>
                  </div>
                </Two>
                <hr></hr>
                <Phonenumber>{props.phone}</Phonenumber>

                <But>
                  <Button
                    onClick={() => {
                      dispatch(removeFriend(props));
                    }}
                  >
                    Remove as Friend
                  </Button>
                </But>
              </Card>
            ))}
          </Cards>
        </Holoder>
      </Div>
    </div>
  );
};

export default Friendcontact;
const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
const Card = styled.div`
  height: 260px;
  width: 253px;
  /* background-color: #dbdbce; */
  background-color: coral;
  border: 1px solid gray;
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
  margin: 33px 20px 40px 60px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;
const But = styled.div`
  margin-top: -33px;
  margin-left: 20px;
  margin-top: 30px;
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
const Holoder = styled.div`
  display: flex;
  justify-contet: center;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: bolder;
  color: coral;

  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
`;
const Forphoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-left: 90px;
  }
`;

const Photo = styled.img`
  height: 400px;
  @media screen and (max-width: 768px) {
    height: 180px;
  }
`;
