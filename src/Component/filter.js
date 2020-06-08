import React from "react";

import styled from "@emotion/styled";

const Filter = () => {
  const Section = styled.section`
    padding-left: 4rem;
    width:25%;
    height:100%;
    
  `;
  const Title = styled.h4`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
  `;
  const Select = styled.select`
    width: 120px;
    height:25px;
  `;
  const Option = styled.option`
  font-size:15px;
  `
  const Container = styled.div`
    margin-bottom: 0.5rem;
  `;
  const SpaceContainer = styled.div`
    margin: 2rem 0;
  `;
  const Span = styled.span`
    display: block;
    margin-bottom: 0.5rem;
    color:black;
    font-size:1.1rem;
  `;
  const InputRight = styled.input`
  width:45px;
  border-radius:4px;
  outline:none;
  
  `
   const InputLeft = styled.input`
     width: 45px;
     margin-left: 10px;
     border-radius:4px;
      outline:none;
   `;
   const Label = styled.label`
   display:block;
   `
   const LabelText = styled.span`
   display:inline-block;
     width:100px;
   `;
   const Checkout = styled.input`
   width:13px;
    height:13px;
   `
  return (
    <Section className="filter">
      <Title>Filter</Title>
      <Container>
        <Select name="neighbourhood" className=" filters neighbourhood">
          <Option>Ridgewood</Option>
        </Select>
      </Container>
      <Container>
        <Select name="housetype" className=" filters neighbourhood">
          <Option> Ranch</Option>
        </Select>
      </Container>
      <Container>
        <Select name="bedrooms" className=" filters bedrooms">
          <Option> 2 Br</Option>
        </Select>
      </Container>
      <SpaceContainer>
        <Container className="filters price">
          <Span className="title">Price</Span>
          <InputRight type="text" name="min-price" className="min-price" />
          <InputLeft type="text" name="max-price" className="max-price" />
        </Container>
        <Container className="filters floor-space">
          <Span className="title">Floor space</Span>
          <InputRight
            type="text"
            name="min-floor-space"
            className="min-floor-space"
          />
          <InputLeft
            type="text"
            name="max-floor-space"
            className="max-floor-space"
          />
        </Container>
      </SpaceContainer>

      <SpaceContainer className="filters extras">
        <Label htmlFor="extras">
          <LabelText>Elevator</LabelText>
          <Checkout name="extras" value="elevator" type="checkbox" />
        </Label>
        <Label htmlFor="extras">
          <LabelText>Swimming Pool</LabelText>
          <Checkout name="extras" value="swimming-pool" type="checkbox" />
        </Label>
        <Label htmlFor="extras">
          <LabelText>finished Basement</LabelText>
          <Checkout name="extras" value="finished basement" type="checkbox" />
        </Label>
        <Label htmlFor="extras">
          <LabelText>gyms</LabelText>
          <Checkout name="extras" value="gyms" type="checkbox" />
        </Label>
      </SpaceContainer>
    </Section>
  );
};

export default Filter;
