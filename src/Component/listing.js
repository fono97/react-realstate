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
  `;
const Info = styled.div`
position: relative;
`
  const Address = styled.address`
position: absolute;
top:80%;
left:10%;
color:white;
font-size:1.3rem;
`

  const ImageContainer = styled.div`
    
    overflow: hidden;
    cursor: pointer;
    height: 20rem;
  `;
  const Image = styled.img`
    height: 100%;
    width: 100%;
  `;
  const Location = styled.div`
  margin-left:20px;
  color:orange;
`
   const Span = styled.span`
     display:inline-block;
     margin-left:10px;
     color:black;
   `
  return (
    <Section>
      <ConTitle>
        <Title>these are all the properties</Title>
      </ConTitle>
      <Properties className="all-properties">
        <Article>
          <div className="single-items">
            <Info >
              <ImageContainer className="image-container">
                <Image className="house-img" src="images/img-1.jpg" />
              </ImageContainer>
              <Address>7598 duneiden lane</Address>
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
    </Section>
  );
};

export default Listing;
