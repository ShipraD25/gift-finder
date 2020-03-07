
import React, { Component } from "react";
import Productcard from "../components/Productcard";
import API from "../utils/API"

class Bookmarks extends Component {
  state = {
    products: [],
    PageType: "bookmark"
  };

  componentDidMount() {
    this.getsavedProducts()}
  
  getsavedProducts = () => {
    API.getBookmarks()
    .then(res => {
      console.log(res.data)
      this.setState({ products: res.data})
    }
    ).catch(err => console.log(err));
  }
    
    render() {
      return (
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
                
              />)
          })}
        </div>
      )
    }
  }
  
  


export default Bookmarks;
