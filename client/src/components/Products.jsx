import styled from "styled-components";
import { popularProducts } from "../dummydata";
import Product from "./Product";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;