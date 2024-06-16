import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/C.png"
import meter2 from "../assets/img/C++.png"
import meter3 from "../assets/img/python2.png"
import meter4 from "../assets/img/html.png"
import meter5 from "../assets/img/css.png"
import meter6 from "../assets/img/javascript.png"
import meter7 from "../assets/img/react.png"
import meter8 from "../assets/img/figma.png"
import meter9 from "../assets/img/material ui.png"
import meter10 from "../assets/img/bootstrap.png"
import meter11 from "../assets/img/tailwind.png"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                My Skills
              </h2>
            
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>C </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="image" />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="image" />
                  <h5>Tailwind CSS</h5>
                </div>
                
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp}/>
    </section>
  )
}

export default Skills;