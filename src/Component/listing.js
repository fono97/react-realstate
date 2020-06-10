import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Listing = () => {
  const Section = styled.section`
    width: 50%;
    height: 100vh;
    background-color: #f2f2f2;
  `;
  const ConTitle = styled.div`
    text-align: center;
  `;

  const Title = styled.h2`
    font-family: "Arial, Helvetica, sans-serif";
    color: black;
  `;
  const Properties = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 600px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
  `;
  const Article = styled.article`
    background-color: white;
    &:hover {
      Address {
        opacity: 0;
      }
    }
  `;
  const Info = styled.div`
    position: relative;
    cursor: pointer;
  `;
  const Container = styled.div`
    opacity: 0;
    background-color: rgba(78, 2, 229, 0.8);
    border-radius: 5px;
    position: absolute;
    top: 1;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
    &:hover {
      Address {
        opacity: 0;
      }
    }
  `;

  const Address = styled.address`
    display: block;
    position: absolute;
    opacity: 1;
    z-index: 4;
    top: 80%;
    left: 10%;
    color: white;
    height: fit-content;
    font-size: 1.3rem;
    transition: all 0.5s ease-in-out;
  `;

  const ImageContainer = styled.div`
    overflow: hidden;
    cursor: pointer;
    height: 20rem;
    z-index: 3;
  `;
  const Image = styled.img`
    height: 100%;
    width: 100%;
  `;
  const Location = styled.div`
    margin-left: 20px;
    color: orange;
  `;
  const Span = styled.span`
    display: inline-block;
    margin-left: 10px;
    color: black;
  `;

  const AgentListing = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  `;
  const AgentDetail = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    height:100%;
  `;
  const ImgAgent = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 15px;
  `;
  const ImgPhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `;
  const ViewMap = styled.p`
    width: fit-content;
    padding: 10px;
    background-color: pink;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: black;
    }
  `;
  const ImgAgentDetail = styled.div`
    margin: 0;
    padding:0;
  `;
  const Pagination = styled.div`
  margin-left:5vw;
  `
  const Ul = styled.ul`
  width:50%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  `
  const Li1 = styled.li`
  display:block;
  padding:0px 3px;
  color:white;
  list-style:none;
  font-size:1.1rem;
  background-color:red;
  `
  const Li = styled.li`
  list-style:none;
  font-size:1.1rem;
  `
  return (
    <Section>
      <ConTitle>
        <Title>these are all the properties</Title>
      </ConTitle>
      <Properties className="all-properties">
        <Article>
          <div className="single-items">
            <Info>
              <ImageContainer className="image-container">
                <Image src="images/img-1.jpg" />
              </ImageContainer>
              <Address>7598 duneiden lane</Address>
              <Container>
                <AgentListing className="detail-listing">
                  <AgentDetail className="agent-detail">
                    <ImgAgent>
                      <ImgPhoto src="images/img-3.jpg" />
                    </ImgAgent>
                    <ImgAgentDetail>
                      <p>gabriel fono</p>
                      <p>posted on june 29 1991</p>
                      <span>7 bed rooms</span>
                      <ViewMap>View listing</ViewMap>
                    </ImgAgentDetail>
                  </AgentDetail>
                </AgentListing>
              </Container>
            </Info>
            <Location className="location">
              <p>
                <FontAwesomeIcon icon={faDollarSign} />
                <Span>350/month</Span>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />
                <Span>Manassas</Span>
              </p>
            </Location>
          </div>
        </Article>
      </Properties>
      <Pagination>
        <Ul>
          <Li>Prev</Li>
          <Li1>1</Li1>
          <Li>2</Li>
          <Li>3</Li>
          <Li>4</Li>
          <Li>5</Li>
          <Li>Next</Li>
        </Ul>
      </Pagination>
    </Section>
  );
};

export default Listing;
