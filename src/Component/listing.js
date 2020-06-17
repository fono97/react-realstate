import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faDollarSign,
  faListUl,
  faTh,
} from "@fortawesome/free-solid-svg-icons";

const Listing = (props) => {
  // const Section = styled.section`
  //   grid-area: main;
  //   margin-top: 1.4rem;
  // `;
  // const ConTitle = styled.div`
  //   text-align: start;
  // `;

  // const Title = styled.h2`
  //   font-family: "Arial, Helvetica, sans-serif";
  //   color: black;
  // `;
  const Properties = styled.div`
    width: 100vw;
    max-width: 600px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
  `;
  // const Article = styled.article`
  //   background-color: white;
  //   &:hover {
  //     Address {
  //       opacity: 0;
  //     }
  //   }
  // `;
  // const Info = styled.div`
  //   position: relative;
  //   cursor: pointer;
  // `;
  // const Container = styled.div`
  //   opacity: 0;
  //   /* background-color: rgba(78, 2, 229, 0.8); */
  //   background: rgba(100, 10, 150, 0.8);
  //   border-radius: 5px;
  //   position: absolute;
  //   top: 1;
  //   right: 0;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   height: 100%;
  //   transition: opacity 0.5s ease-in-out;
  //   &:hover {
  //     opacity: 1;
  //   }
  //   &:hover {
  //     Address {
  //       opacity: 0;
  //     }
  //   }
  // `;

  // const Address = styled.address`
  //   display: block;
  //   position: absolute;
  //   opacity: 1;
  //   z-index: 4;
  //   top: 80%;
  //   left: 10%;
  //   color: white;
  //   height: fit-content;
  //   font-size: 1.3rem;
  //   transition: all 0.5s ease-in-out;
  // `;

  // const ImageContainer = styled.div`
  //   overflow: hidden;
  //   cursor: pointer;
  //   height: 18rem;
  //   z-index: 3;
  // `;
  // const Image = styled.img`
  //   height: 100%;
  //   width: 100%;
  // `;
  // const Location = styled.div`
  //   margin-left: 20px;
  //   color: orange;
  // `;
  // const Span = styled.span`
  //   display: inline-block;
  //   margin-left: 10px;
  //   color: black;
  // `;

  // const AgentListing = styled.div`
  //   position: absolute;
  //   top: 40%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   color: white;
  // `;
  // const AgentDetail = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  //   width: 100%;
  //   height: 100%;
  // `;
  // const ImgAgent = styled.div`
  //   width: 50px;
  //   height: 50px;
  //   margin-right: 15px;
  //   padding-top: 10%;
  // `;
  // const ImgPhoto = styled.img`
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  // `;
  // const ViewListing = styled.p`
  //   padding: 10px;
  //   text-align: center;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: pink;
  //   transition: background-color 0.5s ease-in-out;
  //   &:hover {
  //     background-color: black;
  //   }
  // `;
  // const ImgAgentDetail = styled.div`
  //   display: flex;
  //   flex-direction: column-reverse;
  //   justify-content: center;
  //   align-items: center;
  //   padding-top: 0px;
  // `;
  // const Pagination = styled.div`
  //   padding: 10px;
  //   width: 600px;
  // `;

  // const Ul = styled.ul`
  //   width: 30%;
  //   float: left;
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  // `;
  // const Li1 = styled.li`
  //   display: block;
  //   padding-right: 3px;
  //   color: white;
  //   list-style: none;
  //   font-size: 1.1rem;
  //   background-color: red;
  //   cursor: pointer;
  // `;
  // const Li = styled.li`
  //   list-style: none;
  //   font-size: 1.1rem;
  //   cursor: pointer;
  // `;
  // const TitleContainer = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   width: 600px;
  // `;
  // const Input = styled.input`
  //   width: 70%;
  //   height: 1.2rem;
  // `;
  // const Select = styled.select`
  //   width: 25%;
  //   height: 1.3rem;
  // `;
  // const Option = styled.option``;
  // const Icon = styled.div`
  //   width: 10%;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // `;
  const loopListings = () => {
    const { data } = props;
    // const listings = props.data;
    if (data === undefined || data.length === 0) {
      return "Sorry your filter did not match any listings";
    }

    return data.map((listing, i) => {
      return (
        <Article key={i}>
          <div className="single-items">
            <Info>
              <ImageContainer>
                <Image src={listing.image} />
              </ImageContainer>
              <Address>{listing.address}</Address>
              <Container>
                <AgentListing>
                  <AgentDetail>
                    <ImgAgent>
                      <ImgPhoto src={listing.ImgAgent} />
                    </ImgAgent>
                    <ImgAgentDetail>
                      <p>{listing.name}</p>
                      <p>{listing.post}</p>
                      <span>{listing.bed}</span>
                      <ViewListing> View listing</ViewListing>
                    </ImgAgentDetail>
                  </AgentDetail>
                </AgentListing>
              </Container>
            </Info>
            <Location className="location">
              <p>
                <FontAwesomeIcon icon={faDollarSign} />
                <Span>{listing.price}</Span>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />
                <Span>{listing.city}</Span>
              </p>
            </Location>
          </div>
        </Article>
      );
    });
  };

  return (
    <Section>
      <div>
        <TitleContainer>
          <Input />
          <Select>
            <Option>manassas</Option>
            <Option>fairfax</Option>
          </Select>
        </TitleContainer>
        <TitleContainer>
          <p>3920 result found</p>
          <select>
            <option>highest price</option>
            <option>lowest price</option>
          </select>
          <Icon>
            <div>
              <FontAwesomeIcon icon={faListUl} />
            </div>
            <div>
              <FontAwesomeIcon icon={faTh} />
            </div>
          </Icon>
        </TitleContainer>
      </div>
      <ConTitle>
        <Title>these are all the properties</Title>
      </ConTitle>
      <Properties>{loopListings()}</Properties>
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
