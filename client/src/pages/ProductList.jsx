import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  display:center;
  justify-content:center;
  align-items:center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;

const Option = styled.option``;

function ProductList() {
  const location = useLocation()
  //retrieve the category using location
  const category = location.pathname.split('/')[2];
  const [sort, setSort] = useState("")
  return (
    <Container>
      <Navbar />

      <Link to="/">
        <KeyboardBackspaceOutlinedIcon />
      </Link>
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
