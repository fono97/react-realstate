import React from "react";

import styled from "@emotion/styled";

const Filter = () => {
  const Section = styled.section`
    padding-left: 4rem;
  `;
  const Title = styled.h4`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
  `;
  const Container = styled.div`
    margin-bottom: 0.5rem;
  `;
  return (
    <Section className="filter">
      <Title>filter</Title>
      <Container>
        <select name="neighbourhood" className=" filters neighbourhood">
          <option>Ridgewood</option>
        </select>
      </Container>
      <Container>
        <select name="housetype" className=" filters neighbourhood">
          <option> Ranch</option>
        </select>
      </Container>
      <Container>
        <select name="bedrooms" className=" filters bedrooms">
          <option> 2 Br</option>
        </select>
      </Container>

      <Container className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min-price" className="min-price" />
        <input type="text" name="max-price" className="max-price" />
      </Container>
      <Container className="filters floor-space">
        <span className="title">Floor space</span>
        <input type="text" name="min-floor-space" className="min-floor-space" />
        <input type="text" name="max-floor-space" className="max-floor-space" />
      </Container>
      <div className="filters extras">
        <label for="extras">
          <span>Elevator</span>
          <input name="extras" value="elevator" type="checkbox" />
        </label>
        <label for="extras">
          <span>Swimming Pool</span>
          <input name="extras" value="swimming-pool" type="checkbox" />
        </label>
        <label for="extras">
          <span>finished Basement</span>
          <input name="extras" value="finished basement" type="checkbox" />
        </label>
        <label for="extras">
          <span>gyms</span>
          <input name="extras" value="gyms" type="checkbox" />
        </label>
      </div>
    </Section>
  );
};

export default Filter;
