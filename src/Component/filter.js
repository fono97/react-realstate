import React, {Component} from "react";

import styled from "@emotion/styled";

class Filter extends from Component {
  constructor(){
    super()
    const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  `;
    const Title = styled.h4`
    font-family: "Arial, Helvetica, sans-serif";
    font-size: 1.2rem;
  `;
    const CenterBox = styled.div``;


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
    width: 100px;
  `;
    const Checkout = styled.input`
    width: 13px;
    height: 13px;
  `;
  }
 
 
  render(){
    return (
      <Section>
        <CenterBox>
          <Title>Filter</Title>
          <Container>
            <Select name="neighbourhood" onChange={this.props.changes}>
              <Option value="fairfax ">fairfax</Option>
              <Option value="Manassas">Manassas</Option>
              <Option value="Miami">Miami</Option>
            </Select>
          </Container>
          <Container>
            <Select name="homeType" onChange={props.changes}>
              <Option value="Apartment"> Ranch</Option>
              <Option value="Studio"> Apartment</Option>
              <Option value="Room"> Room</Option>
            </Select>
          </Container>
          <Container>
            <Select
              name="bedrooms"
              className=" filters bedrooms"
              onChange={props.changes}
            >
              <Option value="2"> 2 BR</Option>
              <Option value="3"> 2 BR</Option>
              <Option value="4"> 4 BR</Option>
            </Select>
          </Container>
          <SpaceContainer>
            <Container className="filters price">
              <Span className="title">Price</Span>
              <InputRight
                type="text"
                name="min_price"
                value={props.globalstate.min_price}
                onChange={props.changes}
              />
              <InputLeft
                type="text"
                name="max_price"
                value={props.globalstate.max_price}
                onChange={props.changes}
              />
            </Container>
            <Container className="filters floor-space">
              <Span className="title">Floor space</Span>
              <InputRight
                type="text"
                name="min_floor_space"
                value={props.globalstate.min_floor_space}
                onChange={props.changes}
              />
              <InputLeft
                type="text"
                name="max_floor_space"
                value={props.globalstate.max_floor_space}
                className="max_floor_space"
                onChange={props.changes}
              />
            </Container>
          </SpaceContainer>
          <SpaceContainer className="filters extras">
            <h4>extras</h4>
            <Label htmlFor="extras">
              <LabelText>Elevator</LabelText>
              <Checkout name="elevator" value="elevator" type="checkbox" />
            </Label>
            <Label htmlFor="extras">
              <LabelText>Swimming Pool</LabelText>
              <Checkout
                name="swimming_pool"
                value="swimming_pool"
                type="checkbox"
                onChange={props.changes}
              />
            </Label>
            <Label htmlFor="extras">
              <LabelText>finished Basement</LabelText>
              <Checkout
                name="finished_basement"
                value="finished_basement"
                type="checkbox"
                onChange={props.changes}
              />
            </Label>
            <Label htmlFor="extras">
              <LabelText>gyms</LabelText>
              <Checkout
                name="gyms"
                value="gyms"
                type="checkbox"
                onChange={props.changes}
              />
            </Label>
          </SpaceContainer>
        </CenterBox>
      </Section>
    );
  }

};

export default Filter;
