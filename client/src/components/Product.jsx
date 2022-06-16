import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import styled from 'styled-components'




//display the icons in the middle of the image 
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative; //because I have position absolute of the info 
  &:hover ${Info}{ //see the icons only when we hover on a container 
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 90%;
  z-index: 2; //make the image displaying above the circle 
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover { //making the three icons in the middle hoverable 
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
`

const Product = ({ item }) => {
  
 
  return (
    <>
    

    <Container>
      <Image src = {item.image} alt = "COMING SOON"/>
      <Info>
        <Icon>
          <Link to ={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Title >{item.title}</Title>
      </Info>
    </Container>
    </>);
};

export default Product;