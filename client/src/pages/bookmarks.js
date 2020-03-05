
import React, { Component } from "react";
import Productcard from "../components/Productcard";
import { Input, FormBtn, Filters } from "../components/SearchBar";
import API from "../utils/API"

class Bookmarks extends Component {
  state = {
    products: [],
    
    PageType: "homepage"
  };

  //componentDidMount() {
    //this.getsavedbooks()}

    handleBookmark = id => {
      //const savedProduct= this.state.products.filter(elem=>elem.id === product)
        
      const producttobeSaved = {
          
          title: this.product.title,
          image: this.product.image,
          url: this.product.url,
          price: this.product.price,
      }
    //   API.saveProducts(producttobeSaved)
      
    //     //const nosaved= this.state.books.filter(elem=>elem.id !== result.data.googleId)
    //     .then(res => API.getBookmarks()
    //     .catch(err => console.log(err))
      
    // }
    }
    render() {
      return (
        <div>
                <Productcard
                  key={product.listing_id}
                  id={product.listing_id}
                  title={product.title.slice(0,25)}
                  image={product.Images[0].url_170x135}
                  url={product.url}
                  price={product.price}
                  handleBookmark= {this.handleBookmark}
                />
          </div>
      )
    }
  }
  
  


export default Bookmarks;
