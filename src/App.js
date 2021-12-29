import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";

import Image from "react-bootstrap/Image";
import Logo from "./image/logo.png";
import MainBanner from "./image/main-banner.png";
import Introduction from "./image/introduction-bg.png";
import Bes from "./image/bes-bg.png";
import BP1 from "./image/best-image-01.png";
import BP2 from "./image/best-image-02.png";
import BP3 from "./image/best-image-03.png";
import P01 from "./image/producticon-01.png";
import P02 from "./image/producticon-02.png";
import P03 from "./image/producticon-03.png";
import GoIcon from "./image/go-icon.png";

function App() {
  const imgBP = [BP1, BP2, BP3].map((img, i) => (
    <Image className="img-bestP" src={img} alt={i} />
  ));
  const imgnumBP = [P01, P02, P03].map((img, i) => (
    <div className="img-numbestP">
      <Image src={img} alt={i} />
    </div>
  ));

  const tape = [...Array(3)].map((card, i) => (
    <div className="tape">
      <div className="tape-c">
        <p className="text-p-tape">
          How to create <br />
          mobile-optimized
        </p>
      </div>
      <div>
        <span>
          <Image className="img-go-icon" src={GoIcon} alt="go-icon" />
        </span>
      </div>
    </div>
  ));

  return (
    <>
      <div className="box">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image className="img-logo" src={Logo} alt="logo" />
            </Col>
            <Col xs={12} md={8}>
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link className="text-nav" href="/home">
                    INTRODUCTION
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-nav" eventKey="link-1">
                    SOLUTION
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-nav" eventKey="link-2">
                    RATE PLAN
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-nav" eventKey="link-3">
                    |
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-nav" eventKey="link-4">
                    LOGIN
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-nav" eventKey="link-5">
                    APPLY FOR FREE USE
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Image className="img-mainBanner" src={MainBanner} alt="Main-Banner" />
      </div>
      <div>
        <div className="position-introduction">
          <div>
            <Image
              className="img-introduction"
              src={Introduction}
              alt="introduction-bg"
            />
          </div>
          <div className="position-c-introduction">
            <h1 className="text-h-introduction">WHAT HAPPENED!</h1>
            <p className="text-p-introduction">
              How to create mobile-optimized videos in minutes. Not a designer,
              <br />
              every team makes a lot of videos Can be trimmed. Take the first
              <br />
              step to your brand's success. How to create mobile-optimized
              <br />
              videos in minutes.
            </p>
          </div>
        </div>
      </div>
      <div className="position-bes">
        <div>
          <Image className="img-bes" src={Bes} alt="bes-bg" />
        </div>
        <div className="p-best-product">
          <h2 className="text-h-best-product">BEST PRODUCT</h2>
          <p className="text-p-best-product">
            How to create mobile-optimized videos in minutes. Not a designer,
            <br />
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
        </div>
        <div className="position-img-bestP">
          <Row>
            <Col>{imgBP}</Col>
          </Row>
        </div>
        <div className="position-img-numbestP">{imgnumBP}</div>
        <div className="position-tape">{tape}</div>
      </div>
    </>
  );
}

export default App;
