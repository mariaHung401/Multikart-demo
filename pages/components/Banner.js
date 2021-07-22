import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../components/MasterBanner";

const Data = [
  {
    img: "home4",
    title: "Los Mejores",
    desc: "Los Más Frescos",
    link: "/shop/left_sidebar",
  },
  {
    img: "home5",
    title: "Los Mejores",
    desc: "Los Más Frescos",
    link: "/shop/left_sidebar",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                link={data.link}
                title={data.title}
                desc={data.desc}
                classes={data.classes}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
