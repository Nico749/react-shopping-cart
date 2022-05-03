import styled from 'styled-components'
import {categories} from "../dummydata"
import Category from './Category'


const Container = styled.div`
display:flex;// display horizontally 
padding:20px;
justify-content:space-between;

`
const Title = styled.h1`
justify-content:center;
text-align:center;
font-size:50px;
font-weight:bold;
`


function Categories() {
  return (
      <>
      <Title>OUR PRODUCTS</Title>
    <Container>
      {categories.map(item=>(
          <Category item = {item} key ={item.id}/>
      ))}
    </Container></>
  )
}

export default Categories
