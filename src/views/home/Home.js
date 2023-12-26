import Header from "../../components/header/Header";
import "./home.css";
import img_slider from "../../assets/background_1.svg";
import landing_image from "../../assets/img-5.png";
import declar_image from "../../assets/img-4.png";
import offer_image from "../../assets/img-8.png";
import Card from "./Card";
import cardsData from "./dataCards";
import featuresData from "./FeaturesData";
import Feature from "./Feature";
import PricingPiece from "./PricingPiece";
import pricingData from "./pricingData";
import Customersdata from "./dataCustomers";
import Customer from "./Customer";
import declarationData from "./declarationData";
import Declaration from "./Declaration";
import Footer from "../../components/footer/Footer";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Home() {
  return (
    <setion className="home">
      <Header />
      <div className="landing-page">
        <div className="container">
          <div className="content">
            <div className="text">
              <h1>Premium Hosting Service</h1>
              <p>
                There are many reasons why individuals or companies want to
                change to a new web hosting company. It could be as simple as
                not enough storage space or bandwidth, or it could be due to its
                customer service, or lack thereof. Easier said than done?
                Changing to a new web hosting company may sound like a daunting
                task, but it doesn't have to be that complex - there are just a
                few things to keep in mind.
              </p>
              <button> get web hosting </button>
            </div>
            <div className="image">
              <img src={landing_image} alt="" />
            </div>
          </div>
        </div>
        <span className="background">
          <img src={img_slider} alt="" />
        </span>
      </div>
      <div className="container">
        <div className="features-header">
          <span> our services</span>
          <h2>
            The internet contains over 1.7 billion websites and every one of
            them is hosted by at least one web server.
          </h2>
          <button className="btn-header">all services</button>
        </div>
        <div className="features">
          {cardsData?.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              description={item.description.slice(0, 300) + "...."}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="text">
            <h1>Premium Hosting Service</h1>
            <p>
              There are many reasons why individuals or companies want to change
              to a new web hosting company. It could be as simple as not enough
              storage space or bandwidth, or it could be due to its customer
              service, or lack thereof. Easier said than done? Changing to a new
              web hosting company may sound like a daunting task, but it doesn't
              have to be that complex - there are just a few things to keep in
              mind.
            </p>
          </div>
          <div className="image">
            <img src={offer_image} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contain-features">
          {featuresData?.map((item) => (
            <Feature image={item.image} paragraph={item.paragraph} />
          ))}
        </div>
      </div>
      <div className="pricing">
        <div className="container">
          <div className="pricing-header">
            <span>pricing</span>
            <h1>web hosting plans & pricing</h1>
          </div>
          <div className="pricing-plans">
            {pricingData?.map((item) => (
              <PricingPiece
                price={item.price}
                headLine={item.headLine}
                features={item.features}
                color={item.color}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="file-managment">
        <div className="container">
          <div className="content">
            <div className="text">
              <span>file managment</span>
              <h1>safe and scure web hosting & backups</h1>
              <div className="contain-features">
                {featuresData?.map((item) => (
                  <Feature image={item.image} paragraph={item.paragraph} />
                ))}
              </div>
            </div>
            <div className="image">
              <img src={declar_image} alt="" />
              <button> get web hosting </button>
            </div>
          </div>
        </div>
      </div>
      <div className="customers">
        <div className="customers-header">
          <span>what they're saying</span>
          <h1>customers testimonials</h1>
        </div>
        <div className="contain-customers">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {Customersdata?.map((item) => (
              <SwiperSlide>
                <Customer
                  image={item.image}
                  name={item.name}
                  jobTitle={item.jobTitle}
                  comment={item.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="satisfaction">
        <div className="satisfaction-header">
          <h1>satisfaction guaranteed</h1>
        </div>
        <div className="contain-satisfaction">
          {declarationData.map((item) => (
            <Declaration
              image={item.image}
              title={item.title}
              text={item.text}
              btnText={item.btnText}
              background={item.backgroundColor}
            />
          ))}
        </div>
      </div>
      <Footer />
    </setion>
  );
}
