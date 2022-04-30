import React from "react";
import styled from "styled-components";
// import tim from "../Friendcontact/feranmi.jpg";
import pri from "./forprivate.png";
import { useDispatch, useSelector } from "react-redux";
import { removePrivate } from "../Context";
// import { BiHide, BiHomeAlt } from "react-icons/bi";
import {BiHide} from 'react-icons/bi'
const PrivateContact = () => {
  const data = useSelector((state) => state.myReducer.private);
  const disptch = useDispatch();
const [toggle,setToggle]= React.useState(false)
  const cclick =()=>{
    setToggle(!toggle)
  };
  return (
    <>
      <Text>All your Private Contacts!!! </Text>
      <br />

      <Forphoto>
        <Photo src={pri} alt="image" />
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
                {toggle?(<Cardimage src={props.image} alt="image" />):(
                  <Cardimage alt="image" />
                )}
                  
                  {toggle?( <div>
                    <Cardname>{props.name}</Cardname>
                    <Cardname>{props.lastName}</Cardname>
                  </div>):( <div>
                    <Cardname>xxxxxxxx</Cardname>
                    <Cardname>xxxxxxxx</Cardname>
                  </div>)}
                 
                </Two>
                <hr></hr>
               
               
              {toggle ?(
                
             
              <Eye>
              <Phonenumber>{props.phone}</Phonenumber>
              <BiHide onClick={cclick}/>
              </Eye>
               
               
              ):(
                
              
              
               
                <Eye>
              <Phonenumber>xxxxxxxxxxx</Phonenumber>
              <BiHide onClick={cclick}
              style={{marginBottom:'30px'}}
              />
              </Eye>
              )}

                <But>
                  <Button
                    onClick={() => {
                      disptch(removePrivate(props));
                    }}
                  >
                    Remove as private contact
                  </Button>
                </But>
              </Card>
            ))}
          </Cards>
        </Holoder>
      </Div>
    </>
  );
};

export default PrivateContact;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  height: 265px;
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
  margin: 10px 20px 40px 60px;
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
    height: 280px;
    width: 300px;
  }
`;
const Eye = styled.div`
display: flex;
justify-content: center;
// background-color: red;
cursor: pointer;
`