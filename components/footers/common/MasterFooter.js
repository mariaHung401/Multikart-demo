import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  copyRightFluid,
  newLatter,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener('resize', changeCollapse)
    }

  }, []);
  return (
    <div>
      <footer className={footerClass}>
        {newLatter ? (
          <div className={footerLayOut}>
            <Container fluid={containerFluid ? containerFluid : ""}>
              <section className={footerSection}>
                <Row>
                  <Col lg="6">
                    <div className="subscribe">
                      <div>
                        <h4>¡CONOZCA TODO PRIMERO!</h4>
                        <p>
                          Nunca te pierdas nada.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <Form className="form-inline subscribe-form">
                      <FormGroup className="mx-sm-3">
                        <Input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </FormGroup>
                      <Button type="Enviar" className="btn btn-solid">
                        Suscribete
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </section>
            </Container>
          </div>
        ) : (
          ""
        )}

        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse == 1 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    Sobre Nosotros
                    <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <LogoImage logo={logoName} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,
                    </p>
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com" target="_blank">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://plus.google.com" target="_blank">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com" target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://rss.com" target="_blank">
                            <i className="fa fa-rss" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Collapse>
              </Col>
              <Col className="offset-xl-1">
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 2 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(2);
                        } else setIsOpen(true);
                      }}
                    >
                      Tu Cuenta
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a>Carnes</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a> Carnes </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a>Carnes</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a> Carnes </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 3 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}
                    >
                      Por que nosotros?
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 3 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <a href="#">Compra</a>
                        </li>
                        <li>
                          <a href="#">Seguridad</a>
                        </li>
                        <li>
                          <a href="#">Gallería</a>
                        </li>
                        <li>
                          <a href="#">Afiliados</a>
                        </li>
                        <li>
                          <a href="#">Contáctos</a>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 4 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                    >
                      Información
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i>Demo
                          Tienda, Demo 123-123
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>Llamanos: 123-456-7898
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>Email:{" "}
                          <a href="#">Soporte@soporte.com</a>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight
          layout={layoutClass}
          fluid={copyRightFluid ? copyRightFluid : ""}
        />
      </footer>
    </div>
  );
};
export default MasterFooter;
