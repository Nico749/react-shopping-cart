import { LineAxisOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../dummydata";
import Product from "./Product";
import axios from "axios";

// const cors = require ('cors')

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,sort}) => {

  const [products,setProducts] = useState([])
  const [filteredP,setFilteredP] = useState([])

  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/products")
        console.log(res);
      }
      catch{}
    }
    getProducts()
  },[cat])

  //console.log(cat,sort)
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;