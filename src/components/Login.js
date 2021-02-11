import React from "react";
import styled from "styled-components/macro";

import armadio from "../res/armadio.svg";
import password from "../res/password.svg";
import user from "../res/user.svg";

const Container = styled.div`
	height: 100vh;
	
	display: flex;
	flex-direction: column;
  justify-content: space-around;
  background-color: #83c5be;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%239ccac2' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23b5cfc6' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23cdd3ca' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23e6d8ce' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23ffddd2' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25vh;
`;
const StyledH1 = styled.h1`
	margin : 0px auto 0px auto;
  margin-top: 20px;
  font-style: italic;
  
  border-radius: 7px;
  `;
const Img = styled.img`
	height: 11vh;
  margin: 16px 0px 6px 0px;
`;
const Mex = styled.div`
  border: 1px solid;
  border-radius: 15px;
  padding: 5px;
  width: 60%;
  background-color: #EDF6F9;
  margin: 0px auto 0px auto;
  text-align: center;
  background-color: #ffddd2;
  
`;

const MexH1 = styled.h1`
	font-size: 1em;
  margin: 8px 0px 8px 0px;
`;



const Form = styled.form`
	height: 20vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  border-radius: 15px;
  padding: 6px;

`;

const InputImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EDF6F9;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid;
`;

const InputImg = styled.img`
 	height: 40px;
  padding-right: 15px; 
 
`;
const Input = styled.input`
	width: 75%;
  border-width:0px;
  border:none;
  background-color: #EDF6F9;
	height: 50px;
  font-size: 100%; 
  font-weight: bold;
`;

const Submit = styled.input`
	width: 70%;
	margin: auto;
  border-radius: 10px;
	height: 45px;
  font-size: 130%;
  font-weight: bold;
  background-color: #e29578;
	border: 1px solid;
`;

const Label = styled.label`
	text-align: center;
`;

const SubmitC = styled.div`
	display: flex;
  flex-direction: column;
  margin: 8px 0px 8px 0px;
`

const RegText = styled.h1`
	font-size: 1em;
	text-align: center;
  text-decoration: underline;
`;

const Login = () => (
  <Container>
    <ContainerImg>
      <StyledH1>Stillosu</StyledH1>
      <Img src={armadio} />
    </ContainerImg>
    <Mex>
      <MexH1>Accedi al tuo Account!</MexH1>
    </Mex>
    <Form>
      <InputImgContainer>
        <InputImg src={user} />
        <Input type="text" id="fname" name="fname" placeholder="Email" />
      </InputImgContainer>
      <InputImgContainer>
        <InputImg src={password} />
        <Input type="password" id="lname" name="lname" placeholder="Password" />
      </InputImgContainer>
    </Form>
    <SubmitC>
      <Submit type="submit" value="Accedi" />
      <RegText>Oppure registrati..</RegText>
    </SubmitC>

  </Container>
);

export default Login;