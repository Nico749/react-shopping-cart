
import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1581264669997-3f222f331aaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyb2NlcnklMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius:50px;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Form = styled.form`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin: 10px 0;
  padding: 10px;
  border-radius:10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #54aaeb;
  border-radius:20px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
 
`;



const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState('')
  return (
    <Container>
      <Wrapper>
        <Title> REGISTER</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="mail" onChange={(e) => setMail(e.target.value)}/>
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Button>REGISTER</Button>
        
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;