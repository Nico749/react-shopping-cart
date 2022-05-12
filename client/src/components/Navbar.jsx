import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {FaxRounded, ShoppingCartOutlined } from '@mui/icons-material'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Auth from '../utils';
import { userLogout } from '../redux/apiCalls'
import userSlice from '../redux/userRedux'




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

  const dispatch = useDispatch()
  const user=useSelector((state)=>state.user.currentUser)

    const handleLogout =(e)=>{
      e.preventDefault()
      userLogout(dispatch)
  }
 

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
          <a href="/" onClick={handleLogout}>
             Logout
             </a>
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
