import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  } from '@mui/icons-material'
  import styled from "styled-components";
  import {Link} from 'react-router-dom'



const Container = styled.div`
  display: flex;


`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 20px;
  
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color}; //with props we retrieve the color of a single icon 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;


`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  padding:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  
  
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MAMMA CHE PASTA! </Logo>
        <Desc>
          Follow us on
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
      
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Link style={{textDecoration:"none",color:"black",cursor:"pointer" ,margin:"20px", border:"2px solid black", borderRadius:"50px", width:"120px"}} to ="/admin">
          <ListItem>Admin Portal</ListItem>
          </Link>
          <Link style={{textDecoration:"none",color:"black",cursor:"pointer", margin:"20px", border:"2px solid black", borderRadius:"50px", width:"120px"}} to ="/cart">
          <ListItem>Cart</ListItem>
          </Link>
          <Link style={{textDecoration:"none",color:"black",cursor:"pointer", margin:"20px", border:"2px solid black", borderRadius:"50px", width:"120px"}} to ="/hospo">
          <ListItem>Hospo Deals</ListItem>
          </Link>
          <Link style={{textDecoration:"none",color:"black",cursor:"pointer", margin:"20px", border:"2px solid black", borderRadius:"50px", width:"120px"}} to ="/functions">
          <ListItem>Functions</ListItem>
          </Link>
         
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 123 Fake Address, Mebourne, AU
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> <a style={{textDecoration:"none",color:"black",cursor:"pointer"}}href="mailto:info@mcpasta.com">info@mcpasta.com</a> 
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;