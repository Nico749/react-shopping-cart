import styled from 'styled-components'
import {categories} from "../dummydata"
import Category from './Category'


const Container = styled.div`
display:flex;// display horizontally 
padding:20px;
justify-content:space-between;

`

function Categories() {
  return (
    <Container>
      {categories.map(item=>(
          <Category item = {item} key ={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
