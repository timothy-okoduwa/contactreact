import React, { useState } from "react";
import styled from "styled-components";
import friend from "./undraw_Access_account_re_8spm.png";
import avatar from "../Addcontacts/avatar.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import app from "../Base";
import { useHistory } from "react-router-dom";
const SignupPage = () => {
  const [imge, setImge] = useState(avatar);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const hist = useHistory();
  const [toggle, setToggle] = useState(false);
  const press = () => {
    setToggle(!toggle);
  };
  const signup = async () => {
    const res = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (res) {
      await app.firestore().collection("enter").doc(res.user.uid).set({
        name: email,
        fullname: fullname,
        password: password,
        confirm: confirmpassword,
        image: imge,
        // createdBy: authUser.user.uid,
        createdBy: res.user.uid,
      });
      setEmail("");
      setFullname("");
      setPassword("");
      setConfirmpassword("");
      setImge(avatar);
    }
    hist.push("../Homepage/Homepage.jsx`1");
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child(file.name);
    const fileURL = URL.createObjectURL(file);
    setImge(fileURL);
    await storageRef
      .put(file)
      .then(() => {
        console.log("completed");
      })
      .catch((err) => console.log(err.message));
    setImge(await storageRef.getDownloadURL());
  };
  const checkPassword = () => {
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    console.log(password, confirmpassword);
    const message = document.getElementById("message");
    if (password.length !== 0) {
      if (password === confirmpassword) {
        message.textContent = "passwords match";
        message.style.color = "lightblue";
      } else {
        message.textContent = "passwords dont match";
        message.style.color = "red";
      }
    } else {
      alert("password cant be empty");
      message.textContent = "";
    }
  };

  return (
    <Div>
      <br />
      <Header>Please Signup to start saving your contacts!!</Header>

      <Holder>
        <Put>
          <Imagediv>
            <Image src={friend} alt="image" />
          </Imagediv>
          <Formdiv>
            <Inmputholder>
              <ForImg>
                <Circle src={imge} />
                <Jput
                  placeholder="upload image"
                  type="file"
                  id="picture"
                  onChange={uploadImage}
                />
                <Putton htmlFor="picture">upload image</Putton>
              </ForImg>

              <Placeholder>Fullname:</Placeholder>
              <Input
                placeholder="Full Name"
                style={{
                  width: "230px",
                  margin: "10px",
                  height: "60px",
                  fontSize: "11px",
                  paddingLeft: "17px",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                }}
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
              <Placeholder>Email:</Placeholder>
              <Input
                placeholder="Email"
                style={{
                  width: "230px",
                  margin: "10px",
                  height: "60px",
                  fontSize: "11px",
                  paddingLeft: "17px",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                  outLine: "none",
                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Placeholder>Password:</Placeholder>
              <Input
                placeholder="Password"
                type="password"
                style={{
                  width: "230px",
                  margin: "10px",
                  height: "60px",
                  fontSize: "11px",
                  paddingLeft: "17px",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                }}
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Placeholder>Confirmpassword:</Placeholder>
              {toggle ? (
                <Confirm>
                  <Inputt
                    placeholder="confirm password"
                    type="text"
                    style={{
                      width: "220px",
                      margin: "10px",
                      height: "40px",
                      fontSize: "11px",
                      paddingLeft: "17px",
                      outLine: "none",
                      border: "none",
                      fontFamily: "Raleway",
                      fontWeight: "bolder",
                    }}
                    value={confirmpassword}
                    id="confirmpassword"
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                  />
                  <AiFillEye
                    style={{
                      height: "60px",
                      width: "18px",
                    }}
                    onClick={press}
                  />
                </Confirm>
              ) : (
                <Confirm>
                  <Inputt
                    placeholder="confirm password"
                    type="password"
                    style={{
                      width: "220px",
                      margin: "10px",
                      height: "40px",
                      fontSize: "11px",
                      paddingLeft: "17px",
                      outLine: "none",
                      border: "none",
                      fontFamily: "Raleway",
                      fontWeight: "bolder",
                    }}
                    value={confirmpassword}
                    id="confirmpassword"
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                  />
                  <AiFillEyeInvisible
                    style={{
                      height: "60px",
                      width: "18px",
                    }}
                    onClick={press}
                  />
                </Confirm>
              )}
              <Indicator id="message"></Indicator>
              <Wutton
                onClick={() => {
                  checkPassword();
                  signup();
                }}
              >
                {" "}
                sign up{" "}
              </Wutton>
            </Inmputholder>
          </Formdiv>
        </Put>
      </Holder>
    </Div>
  );
};

export default SignupPage;
const Div = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: coral;
  @media screen and (max-width: 768px) {
    margin-left: 110px;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
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
  height: 589px;
  width: 310px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  border-radius: 10px;
  border-radius: 5px rgba(255, 255, 255, 0.1);
  margin: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 105px;
    width: 293px;
  }
`;
const Imagediv = styled.div`
  /* height: 420px; */
  height: 587px;
  width: 278px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 96px;
  }
`;
const Image = styled.img`
  /* object-fit: cover; */
  object-fit: cover;
  height: 500px;
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
  outline: none;
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
  margin: 5px 58px;

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
const Indicator = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #f2f2f2; */
`;
const Inputt = styled.input`
  height: 30px;
  border: none;
  margin: 20px;
  width: 196px;

  background-color: #f1f1ef;
  outline: none;
  border: none;
`;
const Confirm = styled.div`
  background-color: #f1f1ef;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  width: 250px;
  height: 60px;
  margin-left: 10px;
`;
const Placeholder = styled.div`
  font-size: 10px;
  font-weight: bold;
`;
