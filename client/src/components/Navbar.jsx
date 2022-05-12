import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {FaxRounded, ShoppingCartOutlined } from '@mui/icons-material'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Auth from '../utils';
import { userLogout } from '../redux/apiCalls'




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

  // function showNavigation() {

  //   const handleLogout =(e)=>{
  //     e.preventDefault()
  //     userLogout(dispatch)
  // }
  //   if (Auth.loggedIn()) {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/orderHistory">
  //             Order History
  //           </Link>
  //         </li>
  //         <li className="mx-1">
  //           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //           <a href="/" onClick={handleLogout}>
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/signup">
  //             Signup
  //           </Link>
  //         </li>
  //         <li className="mx-1">
  //           <Link to="/login">
  //             Login
  //           </Link>
  //         </li>
  //       </ul>
  //     );
  //   }
  // }
  //return cart properties, we need only the quantity
  const cartQuantity = useSelector(state=>state.cart.quantity)

  return (

    // <header className="flex-row px-1">
    //   <h1>
    //     <Link to="/">
    //       <span role="img" aria-label="shopping bag">🛍️</span>
    //       -Shop-Shop
    //     </Link>
    //   </h1>

    //   <nav>
    //     {showNavigation()}
    //   </nav>
    // </header>
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
