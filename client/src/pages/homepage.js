import React, { Component } from "react";
import Productcard from "../components/Productcard";
import { Input, FormBtn, Filters } from "../components/SearchBar";
import API from "../utils/API"


class Homepage extends Component {
  state = {
    products: [],
    filteredProducts: [],
    giftSearch: "",
    giftOccasion: "Anniversary",
    minPrice: "0",
    maxPrice: "50",
    PageType: "homepage"
  };

  componentDidMount = () => {
    this.handleFilter(this.state.giftOccasion);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.products)
    // API.getProducts(this.state.giftSearch)
    //   .then(res => {
    //     // console.log(res.data)
    //     this.setState({ products: res.data.results })
    //   })
    //   .catch(err => console.log(err));
    var term = this.state.giftSearch;

    var filterProduct = this.state.products.filter(function (product) {
      return product.title.indexOf(term) !== -1
    })
    console.log(filterProduct)
    this.setState({ filteredProducts: filterProduct })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFilter = (occasion) => {
    //  this.setState({ giftOccasion: occasion });
    console.log("ocassion:", occasion)

    API.getProducts(this.state.giftSearch + " " + occasion, this.state.minPrice, this.state.maxPrice)
      .then(res => {
        this.setState({ products: res.data.results, filteredProducts: res.data.results})
      })
      .catch(err => console.log(err));
  }

  handlePrice = (value) => {
    var minPrice;
    var maxPrice;
    switch (value) {
      case "1":
      default:
        minPrice = 0;
        maxPrice = 50;
        break;
      case "2":
        minPrice = 50;
        maxPrice = 100;
        break;
      case "3":
        minPrice = 100;
        maxPrice = 250;
        break;
      case "4":
        minPrice = 250;
        break;
    }
    console.log("min price: " + minPrice + ", max price: " + maxPrice);
    //this.setState({ minPrice: minPrice });
    //this.setState({ maxPrice: maxPrice });

    API.getProducts(this.state.giftSearch + " " + this.state.giftOccasion, minPrice, maxPrice).then(res => {
      this.setState({ products: res.data.results, filteredProducts: res.data.results })
    })
      .catch(err => console.log(err));
  }
  handleBookmark = product => {
    //const savedProduct= this.state.products.filter(elem=>elem.id === product)
      
    const producttobeSaved = {
        
        title: product.title,
        image: product.image,
        url: product.url,
        price: product.price,
        
 }
    API.saveProducts(producttobeSaved)
    .then(result=>{
      console.log(result)
      //const nosaved= this.state.books.filter(elem=>elem.id !== result.data.googleId)
      //this.setState({books: nosaved})
    })
  }
  
  render() {
    return (
      <div>
        <Filters
          handleFilter={this.handleFilter}
          handlePrice={this.handlePrice} />
        <form>
          <div className="searchbar-container">
            <Input
              name="giftSearch"
              value={this.state.giftSearch}
              onChange={this.handleInputChange}
              placeholder="Filter your results" />
            <FormBtn
              disabled={!(this.state.giftSearch)}
              onClick={this.handleFormSubmit}>
              Filter
            </FormBtn>
          </div>
        </form>
        <div className="row">
          {this.state.filteredProducts.map(product => {
            return (
              <Productcard
                key={product.listing_id}
                id={product.listing_id}
                title={product.title.slice(0,25)}
                image={product.Images[0].url_170x135}
                url={product.url}
                price={product.price}
                handleBookmark= {this.handleBookmark}
              />)
          })}
        </div>
      </div>
    )
  }
}



export default Homepage;