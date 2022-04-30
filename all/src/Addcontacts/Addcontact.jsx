import React, { useState } from "react";
import styled from "styled-components";
import friend from "./friend.png";
import avatar from "./avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../Context";
const Addcontact = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myReducer.contact);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [image, setImage] = useState(avatar);
  const imageUpload = (e) => {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setImage(fileURL);
  };
  const pushFigure = () => {
    const file = {
      id: data.length + 1,
      name,
      lastName,
      phone,
      image,
    };
    dispatch(addContact(file));
    setName("");
    setLastName("");
    setPhone("");
    setImage(avatar);
  };
  return (
    <Div>
      <br />
      <br />
      <Header>Add your Contacts here</Header>
      <br />
      <br />

      <Holder>
        <Put>
          <Formdiv>
            <Inmputholder>
              <ForImg>
                <Circle src={image} />
                <Jput
                  placeholder="upload image"
                  type="file"
                  id="picture"
                  onChange={imageUpload}
                />
                <Putton htmlFor="picture">upload image</Putton>
              </ForImg>
              <Input
                placeholder="First Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{
                  width: "220px",
                  margin: "10px",
                  height: "40px",
                  fontSize: "11px",
                  paddingLeft: "17px",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                }}
              />
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                style={{
                  width: "220px",
                  margin: "10px",
                  height: "40px",
                  fontSize: "11px",
                  paddingLeft: "17px",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                }}
              />
              <Input
                placeholder="Phone Number"
                type="number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                style={{
                  width: "220px",
                  margin: "10px",
                  height: "40px",
                  fontSize: "11px",
                  paddingLeft: "17px",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                }}
              />
              <Wutton
                onClick={() => {
                  pushFigure();
                }}
              >
                {" "}
                Add to contact
              </Wutton>
            </Inmputholder>
          </Formdiv>
          <Imagediv>
            <Image src={friend} alt="image" />
          </Imagediv>
        </Put>
      </Holder>
    </Div>
  );
};

export default Addcontact;
const Div = styled.div`
  /* display: flex;
  justify-content: center; */
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  color: coral;
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
  /* margin-left: 70px; */
  @media screen and (max-width: 768px) {
    margin-left: 90px;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
`;
const Put = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;
const Formdiv = styled.div`
  height: 420px;
  width: 300px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  border-radius: 10px;
  border-radius: 5px rgba(255, 255, 255, 0.1);
  margin: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 105px;
  }
`;
const Imagediv = styled.div`
  height: 420px;
  width: 278px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 96px;
  }
`;
const Image = styled.img`
  /* object-fit: cover; */
  object-fit: cover;
  height: 420px;
  width: 278px;
`;
const Inmputholder = styled.div`
  margin: 20px;
`;
const Input = styled.input`
  height: 30px;
  border: none;
  margin: 20px;
  width: 196px;
  border-radius: 4px;
  background-color: #f1f1ef;
`;
const ForImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Circle = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  margin: 3px 59px;
  border-radius: 50px;
  border: 2px solid coral;
`;
const Putton = styled.label`
  height: 33px;
  width: 110px;

  border: none;
  border-radius: 3px;
  margin: 3px 48px;
  background-color: coral;
  color: white;
  padding-left: 18px;
  padding-top: 10px;

  :hover {
    background-color: lightskyblue;
    color: white;
    /* font-weight: bold; */
    transform: scale(1);
    transition: all 350ms;
  }
`;
const Wutton = styled.button`
  height: 37px;
  width: 139px;
  border: none;
  border-radius: 3px;
  margin: 1px 48px;

  background-color: coral;
  color: ;
  :hover {
    transform: scale(1);
    transition: all 350ms;
    background-color: lightskyblue;
    color: white;
  }
`;
const Jput = styled.input`
  display: none;
`;
