import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  //position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

const Info = styled.div`
  //position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:1px lightGrey solid;
    border-radius:20px;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const Category = ({ item }) => {
    return (
        <>
            <Container>
                <Info> <Image src={item.img} />
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </>
    );
};

export default Category;