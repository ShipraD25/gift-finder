import React, { Component } from "react";
import Productcard from "../components/Productcard";
import { Input, FormBtn, Filters } from "../components/SearchBar";
import API from "../utils/API"


class Homepage extends Component {
  state = {
    products: [],
    giftSearch: "",
    giftOccasion: "Anniversary",
    minPrice: "0",
    maxPrice: "50",
    PageType: "homepage"
  };

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
      // console.log(product)
      return product.title.indexOf(term) !== -1 
    })
    console.log(filterProduct)
    this.setState({products: filterProduct})
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFilter = (occasion) => {
    this.setState({ giftOccasion: occasion });

    API.getProducts(this.state.giftSearch + " " + this.state.giftOccasion, this.state.minPrice, this.state.maxPrice).then(res => {
      // var tags = {}

      this.setState({ products: res.data.results })
    })
      .catch(err => console.log(err));
  }

  handlePrice = (value) => {
    var minPrice;
    var maxPrice;
    switch (value) {
      case "1":
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
    this.setState({ minPrice: minPrice });
    this.setState({ maxPrice: maxPrice });

    API.getProducts(this.state.giftSearch + " " + this.state.giftOccasion, this.state.minPrice, this.state.maxPrice).then(res => {
      this.setState({ products: res.data.results })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form>
          <div className="filter-search-container">
            <Filters
              handleFilter={this.handleFilter}
              handlePrice={this.handlePrice} />
            <div className="searchbar-container">
              <Input
                name="giftSearch"
                value={this.state.giftSearch}
                onChange={this.handleInputChange}
                placeholder="Search For a Gift" />
              <FormBtn
                disabled={!(this.state.giftSearch)}
                onClick={this.handleFormSubmit}
              > Search
          </FormBtn>
            </div>
          </div>
        </form>
        <div className="row">
          {this.state.products.map(product => {
            return (
              <Productcard
                key={product.listing_id}
                id={product.listing_id}
                title={product.title}
                image={product.Images[0].url_170x135}
                url={product.url}
                price={product.price}
              />)
          })}
        </div>
      </div>
    )
  }
}



export default Homepage;