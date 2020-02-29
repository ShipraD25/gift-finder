import React, { Component } from "react";
import Productcard from "../components/Productcard";
import { Input, FormBtn } from "../components/SearchBar";
import API from "../utils/API"


class Homepage extends Component {
  state = {
    products: [],
    giftSearch: "",
    PageType: "homepage"
  };

  handleFormSubmit = event => {

    event.preventDefault();
    console.log("form button clicked")

    API.getProducts(this.state.giftSearch)
      .then(res => this.setState({ products: res.data.hits }))
      .catch(err => console.log(err));
  };
  // axios.get("https://openapi.etsy.com/v2/listings/active?keywords:" + this.state.giftSearch + "&includes=Images&api_key=dggfhwkwf5yl2hsyp2mhwn38")
  //   .then(res => {
  //     console.log(res.data.results)
  //     this.setState({ products: res.data.results })
  //   }
  //   ).catch(err => console.log(err));

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
      </form>
      {this.state.products.map(product => {
        return (
          <Productcard

          />)
      })}
    </div>
  )
}
}



export default Homepage;
