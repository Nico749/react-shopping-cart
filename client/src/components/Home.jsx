import React from 'react'
import styled from "styled-components";
import WidgetLg from "./widgetLg/WidgetLg";
import WidgetSm from "./widgetSm/WidgetSm";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Welcome = styled.h1`
margin:20px;`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Home = () => {
  return (
    <div style={{ flex: 6 }}>
      <div style={{ display: "flex", margin: 20 }}>
        <Left>
          <Welcome>
            Welcome {JSON.parse(localStorage.getItem('user'))}! &nbsp;
          </Welcome>
        </Left>
        <Center>
          <WidgetLg />
        </Center>
        <Right>
          <WidgetSm />
        </Right>
      </div>
    </div>
  )
}

export default Home
