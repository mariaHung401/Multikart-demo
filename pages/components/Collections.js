import { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import MasterServiceContent from "../../components/common/Service/MasterServiceConternt";
import {
  svgFreeShipping,
  svgoffer,
  svgservice,
} from "../../services/script";

const Data = [
  {
    link: svgFreeShipping,
    title: "envío gratis",
    service: "Envío Gratis Mundial",
  },
  {
    link: svgservice,
    title: "Servicio 24 X 7",
    service: "Servicios Online para Nuevos Compradores",
  },
  {
    link: svgoffer,
    title: "Ofertas de Festival",
    service: "Nuevas Ofertas Especiales",
  },
];

const Collections = () => {
  return (
    <Fragment>
      <section className="banner-padding absolute-banner pb-0">
        <Container className="absolute-bg">
          <div className="service p-0">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col md="4" className="service-block" key={i}>
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Collections;
