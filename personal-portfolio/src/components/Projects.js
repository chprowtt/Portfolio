import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
   
    {
      title: "Cloud Management App",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    
    {
      title: "Treenity Social Media app",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Wordle",
      description: "Design & Development",
      imgUrl: projImg3,
    },
   
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I created several projects throughout the years </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Treenity Treenity is a social media plateform that will include features like creating challenges between connections who have similar interests , this concept is similar to an accountability partner .
                      DEVELOPMENT TOOLS 
                      React 
                      Node.js 
                      MongoDB
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Treenity is a social media plateform that will include features like creating challenges between connections who have similar interests , this concept is similar to an accountability partner .
                      DEVELOPMENT TOOLS 
                      React 
                      Node.js 
                      MongoDB </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
