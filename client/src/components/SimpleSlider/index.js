import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import API from "../../utils/API";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#c23c27" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  state = {
    trendingProducts: []
  }

  componentDidMount = () => {
    API.handleTrending()
      .then(res => {
        console.log(res.data.results)
        let prod = res.data.results.filter(elem => elem.Images !== undefined )
            console.log(prod)
        this.setState({ trendingProducts: prod })
      })
  }

  

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const cssimg={
      width:"400px"
    };

    return (
      <div>

        <Slider {...settings}>
          {this.state.trendingProducts.map(product => (
            <div>
              <img style={cssimg} src={product.Images[0].url_170x135}></img>
            </div>
          ))}
        </Slider>


      </div>
    );
  }
}
