import React, { Component } from "react";
import Productcard from "../components/Productcard";
import { Input, FormBtn, Filters } from "../components/SearchBar";
import API from "../utils/API"


class Homepage extends Component {
  state = {
    products: [],
    giftSearch: "",
    PageType: "homepage"
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getProducts(this.state.giftSearch)
      .then(res => {
        // console.log(res.data)
        this.setState({ products: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="filter-search-container">
            <Filters/>
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