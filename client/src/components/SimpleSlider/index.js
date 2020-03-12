import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import API from "../../utils/API";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#C23C27"}}
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
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />
    };
     const cssimg={
       width:"300px",
       objectFit: "cover",
       height: "235px",
     justifyContent: "center"
    
    };
    /*const cssButton= {
      justifyContent: "center",
      backgroundColor: "burlywood",
      marginTop: "15px"
    }*/

    return (
      <div>
        <h4>Trending Products: </h4>
        <Slider {...settings} >
          
          {this.state.trendingProducts.map(product => (
            <div className="trending-cards" key={product.listing_id}>
              
              <img style={cssimg} src={product.Images[0].url_fullxfull} alt={product.title.slice(0, 10)}></img>
             <p className="trending-info">
             <span><a href={product.url} >{product.title.slice(0, 35)}...</a></span>
            </p>
            </div>
          ))}
        </Slider>


      </div>
    );
  }
}
