import React, { Component } from "react";
import Productcard from "../components/Productcard";
import SearchBar from "../components/SearchBar";


class Homepage extends Component {
  state = {
    products: [],
    giftSearch: "",
    PageType: "homepage"
  };

  render() {
    return (
      <div>
        <SearchBar
          name="bookSearch"
          value={this.state.bookSearch}
          onChange={this.handleInputChange}
          placeholder="Search For a Book"
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
