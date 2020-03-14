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
      centerMode: true,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
      //adaptiveHeight: true,
      className: "trending-cards"
    };
    //   const cssimg={
    //   // width: "800px", margin: "auto", padding: "50px"}
    //     width:"300px",
    //     objectFit: "cover",
    //     height: "235px",
    //   justifyContent: "center"
    // };

    /*const cssButton= {
      justifyContent: "center",
      backgroundColor: "burlywood",
      marginTop: "15px"
    }*/

    return (
      <div>
        
        <Slider {...settings} >
          
          {this.state.trendingProducts.map(product => (
            <div  key={product.listing_id}>
              {/* <h4>Trending Products: </h4> */}
              <a href={product.url} target="_blank" rel="noopener noreferrer"><img width="800px" height="300px" src={product.Images[0].url_fullxfull} alt={product.title.slice(0, 10)}></img></a>
             {/* <p className="trending-info">
             <span><a href={product.url} >{product.title.slice(0, 35)}...</a></span>
            </p> */}
            </div>
          ))}
        </Slider>


      </div>
    );
  }
}
