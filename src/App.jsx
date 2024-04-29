import Section from "./Section";
import FeedNews from "./Feed";
import Galley from "./Gallery";
import Footer from "./footer";
import Header from "./header";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Section />
        </Col>
      </Row>
        
        <Galley />
        <FeedNews />
        <Footer />
    </Container>
  );
}

export default App;
