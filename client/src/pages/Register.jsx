import { useState } from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux'
import { addClient } from "../redux/apiCalls";
import { Link } from 'react-router-dom';
import { login } from "../redux/apiCalls";


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

  const [user,setUser]  =useState({})
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const handleChange =(e)=>{
    setUser(prev=>{
     return{ ...prev, [e.target.name]:e.target.value}
    })
  }
  const handleClick = (e)=>{
    e.preventDefault()
    const newUser = {...user}
    //console.log(newUser)
    addClient(newUser,dispatch)
    //login(dispatch, { username, password });
    
  }
  return (
    <Container>
      <Wrapper>
        <Title> REGISTER</Title>
        <Form>
          <Input name="username" type="text"placeholder="username" onChange={handleChange} />
          <Input name="mail" type="text" placeholder="mail" onChange={handleChange}/>
          <Input name="password" type="password" placeholder="password" onChange={handleChange} />
          <Button onClick = {handleClick} >REGISTER</Button>
          Already have an account? <Link to ='/login'>Login here</Link>
     
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;