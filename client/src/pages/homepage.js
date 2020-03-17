import React, { Component } from "react";
import Productcard from "../components/Productcard";
import { Input, FormBtn, Filters } from "../components/SearchBar";
import API from "../utils/API";
import SimpleSlider from "../components/SimpleSlider";


class Homepage extends Component {
  state = {
    products: [],
    filteredProducts: [],
    giftSearch: "",
    giftOccasion: "Anniversary",
    minPrice: "0",
    maxPrice: "50",
    PageType: "homepage",
    isLoading: true
  };

  componentDidMount = () => {
    this.handleFilter(this.state.giftOccasion);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
    var term = this.state.giftSearch.toLowerCase();

    var filterProduct = this.state.products.filter(function (product) {
      return product.title.toLowerCase().indexOf(term) !== -1
    })
    this.setState({ filteredProducts: filterProduct })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFilter = (occasion) => {
    
    this.setState({ isLoading: true, products: [], filteredProducts: [] });
    API.getProducts(occasion, this.state.minPrice, this.state.maxPrice)
      .then(res => {
        this.setState({ isLoading: false, giftSearch: "", 
        products: res.data.results, filteredProducts: res.data.results })
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
    

    this.setState({ isLoading: true, products: [], filteredProducts: [] });
    API.getProducts(this.state.giftOccasion, minPrice, maxPrice).then(res => {
      this.setState({ isLoading: false, products: res.data.results, filteredProducts: res.data.results })
    })
      .catch(err => console.log(err));
  }

  handleBookmark = id => {
    
    const savedProduct = this.state.products.filter(product => product.listing_id === parseInt(id))
    
    const productTobeSaved = {

      title: savedProduct[0].title,
      image: savedProduct[0].Images[0].url_170x135,
      url: savedProduct[0].url,
      price: savedProduct[0].price,
      listing_id: savedProduct[0].listing_id
    }

    API.saveProducts(productTobeSaved)
      .then(result => {
        
        const nosaved = this.state.products.filter(product => product.listing_id !== result.data.listing_id)
        this.setState({ books: nosaved })
      })
  };

  displayErrorMessage = () => {
    if (this.state.filteredProducts.length === 0 && !this.state.isLoading) {
      return <div className="error-message" style={{ textAlign: "center", marginTop: "50px" }}>
        <span>Sorry, we couldn't find any matching results. Try searching for a different keyword.</span>
      </div>
    }
  }

  displayLoading = () => {
    if (this.state.isLoading) {
      return <div className="spinner">
          <i className="fas fa-spinner fa-spin"></i>
      </div>
    }
  }

  render() {
    return (
      <div>
        <SimpleSlider />
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
        {this.displayErrorMessage()}
        {this.displayLoading()}
        <div className="row">
          {this.state.filteredProducts.map(product => {
            return (
              <Productcard
                key={product.listing_id}
                id={product.listing_id}
                title={product.title.slice(0, 25)}
                image={product.Images[0].url_170x135}
                url={product.url}
                price={product.price}
                handleBookmark={this.handleBookmark}
                page_type={this.state.PageType}
                loggedIn={this.props.loggedIn}
              />)
          })}
        </div>
        <div>
        
        </div>
      </div> 
    )
  }
}



export default Homepage;