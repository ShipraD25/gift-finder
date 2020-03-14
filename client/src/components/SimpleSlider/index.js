import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./style.css";
import API from "../../utils/API";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  state = {
    settings : {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: "slides"
    },
    trendingProducts: []
  }

  componentDidMount = () => {
    API.handleTrending()
      .then(res => {
        console.log(res.data.results)
        let prod = res.data.results.filter(elem => elem.Images !== undefined)
        console.log(prod)
        this.setState({ trendingProducts: prod })
        console.log(this.state)
      })
  }

  render() {
    const {settings} = this.state ;
    console.log("rendering..");
    
  return (
      <div className="row justify-content-center slider-container">
        <div className="col-lg-6">
          <Slider {...settings} >

            {this.state.trendingProducts.map(product => (
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <div className="carousel-item-container" key={product.listing_id}>
                  <img className="carousel-item-image" src={product.Images[0].url_fullxfull} alt={product.title.slice(0, 10)}></img>
                  <div className="carousel-item-text">{product.title}...</div>
                </div>
              </a>
            ))}
          </Slider>

        </div>
      </div>
    );
  }
}
