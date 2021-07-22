import React, { useEffect } from "react";
import { withApollo } from "../helpers/apollo/apollo";
import HeaderTwo from "../components/headers/header-two";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
// import TopCollection from "../../../components/common/Collections/Collection4";
import SpecialProducts from "../components/common/Collections/Collection5";
import Blog from "../components/common/Blog/blog1";
import { Product5 } from "../services/script";
// import ModalComponent from "../../../components/common/Modal";
import MasterParallaxBanner from "./components/MasterParallaxBanner";
import MasterFooter from "../components/footers/common/MasterFooter";
import TopCollection from "../components/common/Collections/Collection1";
import ProductSlider from "./components/Collection";
import { Product4 } from "../services/script";

const Vegetables = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });
  return (
    <>
      {/* <ModalComponent /> */}
      <HeaderTwo logoName={"logo.png"} topClass="top-header" />
      <Banner />
      <Collections />

      <TopCollection
        type="vegetables"
        productDetail="text-center"
        line={true}
        titleClass="title4"
        innerTitle="title-inner4"
        title="Tendencia en Productos"
        designClass="section-b-space"
        cartClass="cart-box"
        noSlider="true"
      />

      {/* <TopCollection
        titleClass="title4"
        inner="title-inner4"
        line={true}
        type="vegetables"
        productSlider={Product5}
        title="Tendencia en Productos"
        designClass="section-b-space addtocart_count ratio_square"
        productSlider={Product5}
        noSlider="true"
        cartClass="cart-info cart-wrap"
      /> */}

      <MasterParallaxBanner
        bg="parallax-banner1"
        parallaxClass="text-left p-left"
        title="2021"
        subTitle1="Ofertas Especiales"
        subTitle2="Productos Frescos"
      />
      <div className="section-b-space">
        {/* <SpecialProducts
          type="vegetables"
          cartClass="cart-info cart-wrap"
          designClass="addtocart_count ratio_square"
        /> */}
        <ProductSlider
        type="vegetables"
        productDetail="text-center"
        cartClass="cart-box"
        ProductSlider={Product4}
        cartClass="cart-box"
        noSlider="true"
      />
      </div>
      <Blog
        type="vegetables"
        sectionClass="blog blog-bg section-b-space ratio2_3"
        inner="title-inner4"
        title="title4"
      />
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default withApollo(Vegetables);
