import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {ShoppingCartOutlined } from '@mui/icons-material'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


//creating styled components
const Container = styled.div`
  height: 120px;
  background-color: #c5f0fc;
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
  font-size:32px;
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
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;

`;


const Navbar = () => {
  //return cart properties, we need only the quantity
  const cartQuantity = useSelector(state=>state.cart.quantity)

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
          <Link to ='/register' style={{ textDecoration: 'none', color:'black' }}>
            <Item>REGISTER</Item>
          </Link>
          <Link to ='/login' style={{ textDecoration: 'none', color:'black' }}>
          <Item>LOG IN</Item>
          </Link>
          <Link to ="/cart">
            <Item><Badge badgeContent={cartQuantity} color="primary">
              <ShoppingCartOutlined
                color="action" />
            </Badge></Item>
          </Link>
        </Right>   
        </Wrapper>
    
    </Container>
  )
}

export default Navbar
