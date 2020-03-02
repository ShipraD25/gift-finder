import React, { Component } from "react";
import Productcard from "../components/Productcard";
import {Input, Frmbtn} from "../components/SearchBar";


class Homepage extends Component {
  state = {
    products: [],
    giftSearch: "",
    PageType: "homepage"
  };

  handleInputChange = event => {
      
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
  
    axios.get("" + this.state.giftSearch)
    .then(res =>
      //console.log(res.data.items)
      this.setState({products: res.data.items})
    ).catch(err => console.log(err));
    
  }; 

  render() {
    return (
      <div>
        <SearchBar
          name="giftSearch"
          value={this.state.giftSearch}
          onChange={this.handleInputChange}
          placeholder="Search For a Gift"
          onClick={this.handleFormSubmit}
          type="success"
          className="input-lg"
        />
        <Productcard
          id="123"
          image="https://i.etsystatic.com/5839963/d/il/ede62b/402374196/il_170x135.402374196_imoh.jpg?version=0"
          title="Gears, Steampunk Grouping Of 12 Tiny & Small  Wood Laser Cut Gears - Size T  1&#39; or less, Metal Color - Copper, Brass, Bronze"
          url="https://www.etsy.com/listing/265222330/gears-steampunk-grouping-of-12-tiny?utm_source=giftfinder&utm_medium=api&utm_campaign=api"
          price="7.50"
        />
      </div>
    )
  }
}

export default Homepage;
