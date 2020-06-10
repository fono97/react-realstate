import React, { Component } from "react";
import Main from "./Component/main";
import Header from "./Component/header";
import data from "./Component/listingdata/data"




class App extends Component {
  constructor(){
    super()
    this.state = {
      data
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main data ={this.state.data}/>
      </div>
    );
  }
}
export default App;

{/* <Article>
          <div className="single-items">
            <Info>
              <ImageContainer className="image-container">
                <Image src="images/img-8.jpg" />
              </ImageContainer>
              <Address>7598 Winterthur lane</Address>
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
        </Article> */}