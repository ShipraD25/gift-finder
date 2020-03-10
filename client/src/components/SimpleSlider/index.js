import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import API from "../../utils/API";

export default class SimpleSlider extends Component {
  state = {
    trendingProducts: []
  }

  componentDidMount = () => {
    API.handleTrending()
    .then(res => {this.setState({trendingProducts: res.data.results})
  })
}

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div> 
        {this.state.trendingProducts.map(product => {
          return (
        <Slider {...settings}>
        
          <div
           image={product.Images[0].url_170x135}></div>
        </Slider>
        )
      })}
        
      </div>
    );
  }
}