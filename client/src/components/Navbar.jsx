import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {ShoppingCartOutlined } from '@mui/icons-material'


//creating styled components
const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
 `

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const Item = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            {/* 
            <SearchContainer>
               <Input></Input> 
               <Search style={{color:"grey", fontSize:"16px"}}/>
            </SearchContainer> */}
          </Left>
          <Center>
            <Logo>NICO'S SHOP</Logo>
          </Center>
          <Right>
          <Item>REGISTER</Item>
          <Item>SIGN IN</Item>
          <Item><Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined
              color="action" />
          </Badge></Item>
        </Right>   
        </Wrapper>
    
    </Container>
  )
}

export default Navbar
