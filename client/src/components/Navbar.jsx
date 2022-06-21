import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { cartLogout, userLogout } from '../redux/apiCalls'


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
  flex: 2;
  text-align: center;
  font-size:32px;
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size: 62px;

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

function Navbar() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.currentUser)

  const handleLogout = (e) => {
    e.preventDefault()
    
    cartLogout(dispatch)
    userLogout(dispatch)
  }

  //return cart properties, we need only the quantity
  const cartQuantity = useSelector(state => state.cart.quantity)

  function showNavigation() {
    if (localStorage.getItem('user')) {
      return (
        <Container>
          <Wrapper>
            <Left>
            </Left>
            <Center>
              <Logo>MAMMA CHE PASTA! </Logo>
            </Center>
            <Right>
              <Item>Welcome {JSON.parse(localStorage.getItem('user'))}!</Item>
              <a style={{ textDecoration: 'none', color: 'black' }} href="/" onClick={handleLogout}>
                <Item>LOGOUT</Item>
              </a>
              <Link to="/cart">
                {/* <Item><Badge badgeContent={cartQuantity} color="primary"> */}
                <Item>
                {JSON.parse(localStorage.getItem('cart'))>0 
                ? 
                  <Badge badgeContent={localStorage.getItem('cart')} color="primary">
                  <ShoppingCartOutlined
                    color="action" />
                  </Badge>
                : null}
                </Item>
              </Link>
            </Right>
          </Wrapper>
        </Container>
      )

    } else {
      return (

        <Container>
          <Wrapper>
            <Left>
            </Left>
            <Center>
              <Logo>MAMMA CHE PASTA!</Logo>
            </Center>
            <Right>
              <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>
                <Item>REGISTER</Item>
              </Link>
              <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>
                <Item>LOG IN</Item>
              </Link>
              <Link to="/cart">
                <Item>
                {JSON.parse(localStorage.getItem('cart'))>0 
                ? 
                  <Badge badgeContent={localStorage.getItem('cart')} color="primary">
                  <ShoppingCartOutlined
                    color="action" />
                  </Badge>
                : null}
                </Item>
              </Link>
            </Right>
          </Wrapper>

        </Container>
      )

    }
  }

  return (
    <Container> {showNavigation()} </Container>

  );
}




export default Navbar
