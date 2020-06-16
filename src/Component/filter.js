import React from "react";

import styled from "@emotion/styled";

const Filter = (props) => {
  const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-area: sidebar;
    width: 100%;
  `;
  const CenterBox = styled.div`
    margin-right: 4rem;
    text-align: left;
  `;
  const Title = styled.h4`
    font-family: "Arial, Helvetica, sans-serif";
    font-size: 1.2rem;
  `;
  const Select = styled.select`
    width: 120px;
    height: 25px;
  `;
  const Option = styled.option`
    font-size: 15px;
  `;
  const Container = styled.div`
    margin-bottom: 0.5rem;
  `;
  const SpaceContainer = styled.div`
    margin: 2rem 0;
  `;
  const Span = styled.span`
    display: block;
    margin-bottom: 0.5rem;
    color: black;
    font-size: 1.1rem;
  `;
  const InputRight = styled.input`
    width: 45px;
    border-radius: 4px;
    outline: none;
  `;
  const InputLeft = styled.input`
    width: 45px;
    margin-left: 10px;
    border-radius: 4px;
    outline: none;
  `;
  const Label = styled.label`
    display: block;
  `;
  const LabelText = styled.span`
    display: inline-block;
    width: 70px;
    margin-right: 2rem;
  `;
  const Checkout = styled.input`
    width: 13px;
    height: 13px;
  `;
  return (
    <Section>
      <CenterBox>
        <Title>Filter</Title>
        <Container>
          <Select
            name="neighborhood"
            value={props.globalState.neighborhood}
            onChange={props.change}
          >
            <Option value="fairfax">fairfax</Option>
            <Option value="Manassas">Manassas</Option>
            <Option value="Miami">Miami</Option>
          </Select>
        </Container>
        <Container>
          <Select
            name="housetype"
            value={props.globalState.housetype}
            onChange={props.change}
          >
            <Option value="Ranch"> Ranch</Option>
            <Option value="Apartment"> Apartment</Option>
            <Option value="Studio"> Studio</Option>
            <Option value="Room"> Room</Option>
          </Select>
        </Container>
        <Container>
          <Select
            name="bedrooms"
            className=" filters bedrooms"
            onChange={props.change}
            value={props.globalState.bedrooms}
          >
            <Option value="2"> 2 BR</Option>
            <Option value="3"> 3 BR</Option>
            <Option value="4"> 4 BR</Option>
          </Select>
        </Container>
        <SpaceContainer>
          <Container>
            <Span>Price</Span>
            <input
              type="text"
              name="min_price"
              value={props.globalState.min_price}
              onChange={props.change}
            />
            <input
              type="text"
              name="max_price"
              value={props.globalState.max_price}
              onChange={props.change}
            />
          </Container>
          <Container>
            <Span>Floor space</Span>
            <input
              type="text"
              name="min_floor_space"
              value={props.globalState.min_floor_space}
              onChange={props.change}
            />
            <input
              type="text"
              name="max_floor_space"
              value={props.globalState.max_floor_space}
              className="max_floor_space"
              onChange={props.change}
            />
          </Container>
        </SpaceContainer>
        <SpaceContainer className="filters extras">
          <h4>extras</h4>
          <Label htmlFor="extras">
            <LabelText>Elevator</LabelText>
            <Checkout
              onChange={props.change}
              name="elevator"
              value="elevator"
              type="checkbox"
              checked={props.globalState.elevator}
            />
          </Label>
          <Label htmlFor="extras">
            <LabelText>Swimming Pool</LabelText>
            <Checkout
              name="swimming_pool"
            
              checked={props.globalState.swimming_pool}
              type="checkbox"
              onChange={props.change}
            />
          </Label>
          <Label htmlFor="extras">
            <LabelText>finished Basement</LabelText>
            <Checkout
              name="finished_basement"
              checked={props.globalState.finished_basement}
              type="checkbox"
              onChange={props.change}
            />
          </Label>
          <Label htmlFor="extras">
            <LabelText>gyms</LabelText>
            <Checkout
              name="gyms"
              type="checkbox"
              checked={props.globalState.gyms}
              onChange={props.change}
            />
          </Label>
        </SpaceContainer>
      </CenterBox>
    </Section>
  );
};

export default Filter;
