import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,sort}) => {
  const category = useLocation().pathname.split("/")[2]
  //console.log(category)

  const [products,setProducts] = useState([])

  //get products, if there is a category retrieves only few of them otherwise all of them
  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get( `http://localhost:5000/api/products?category=${category}`  )
        //console.log(res.data);
        setProducts(res.data)
      }
      catch{}
    }
    getProducts()
  },[cat,category])


useEffect(()=>{
  if (sort === "") {
    //take prev version of products and sort
    setProducts(prev => [...prev].sort((a,b)=>a.createdAt-b.createdAt)
    )}
  else if (sort === "asc") {
    setProducts(prev => [...prev].sort((a,b)=>a.price-b.price)
    )}
  else  {
    setProducts(prev => [...prev].sort((a,b)=>b.price-a.price)
    )}
},[sort])


  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;