import React from "react";
import styled from "styled-components";
import timm from "./timmy.jpg";
import { BsWhatsapp, BsFacebook, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
const TheCreator = () => {
  return (
    <Div>
      <Holder>
        <Imageholder>
          <Image src={timm} />
        </Imageholder>
        <Write>
          <Header>HI GUYS MY NAME IS TIMOTHY 👋</Header>
          <Header>THE CREATOR 👽</Header>
          <br />
          <br />
          <Content>
            <Letter>
              A<B> front end SoftWare Developer</B>... who leaves in{" "}
              <B>Ajegunle</B> a slum community in lagos. I scholled and interned
              in <B>CodeLab</B> a coding academy in <B>Ajegunle</B>. I created
              this App called <B>All-Contact-Saver</B>
              to tackle the problem of insecurity in my Community{" "}
              <B>Ajegunle</B>. The App helps user save and categorise their
              contacts and prevents it from being stolen for illegal purposes,
              with the <B>A-C-S </B> <B>App</B> you as a user will have the
              ability to.....
              <B>i.</B>save your contacts in the private collection...
              <B>ii.</B>save your contacts in the family collection...
              <B>iii.</B>save your contacts in the friend collection...
              <B>iv.</B>save your contacts in the business collection.... The
              App also helps you analyse your Contacts according to how it was
              saved in the home page . The level of insecurity in our
              communities and the World at large is a very big issue and its up
              to us to change the NARRIATIVE....
              <B>
                "Solving the Problem of our communities one App at a time"!!!
              </B>
            </Letter>
          </Content>
          <br />
          <Footer>
            <Align>
              <div>
                <A href="https://wa.me/+2349045339820">
                  <BsWhatsapp />
                </A>
              </div>
            </Align>
            <Align>
              <div>
                <A href="https://www.facebook.com/timmy.lee.37669528">
                  <BsFacebook />
                </A>
              </div>
            </Align>
            <Align>
              <div>
                <A href="https://github.com/timothy-okoduwa">
                  <BsGithub />{" "}
                </A>
              </div>
            </Align>
            <Align>
              <div>
                {" "}
                <A href="https://www.linkedin.com/in/timothy-okoduwa-3845ab215/">
                  {" "}
                  <FaLinkedin />
                </A>
              </div>
            </Align>
            <Align>
              <div>
                {" "}
                <A href="https://timothys-portfolio.web.app">
                  {" "}
                  <FaGlobe />
                </A>
              </div>
            </Align>
          </Footer>
          <Copyright>
            <Developed>
              Developed by Timothy💻| 2022 | © All Rights reserved 
             
            </Developed>
          </Copyright>
        </Write>
      </Holder>
    </Div>
  );
};

export default TheCreator;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Imageholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 600px;
  width: 550px;
  @media screen and (max-width: 768px) {
    height: 400px;
    width: 300px;
    margin-left: 50px;
  }
`;
const Write = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  height: 600px;
  width: 550px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: 400px;
    width: 300px;
  }
`;
const Header = styled.div`
  margin-top: 10px;
  /* color: lightskyblue; */
  color: coral;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 60px;
  }
`;
const Content = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 90px;
    width: 240px;
  }
`;
const B = styled.b`
  color: coral;
`;
const Letter = styled.div`
  font-weight: bold;
  font-family: raleway;
  line-height: 30px;
`;

const Footer = styled.div`
  width: 660px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 90px;
    width: 240px;
  }
`;
const Align = styled.div``;
const A = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 25px;
`;
const Copyright = styled.div``;
const Developed = styled.div`
  font-family: Raleway;
  font-weight: bold;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 90px;
    width: 240px;
  }
`;
