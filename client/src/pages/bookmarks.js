
import React, { Component } from "react";
import Productcard from "../components/Productcard";
import API from "../utils/API"

class Bookmarks extends Component {
  state = {
    bookmarks: [],
    PageType: "bookmarks"
  };

  componentDidMount() {
    this.getSavedProducts()
   }
  
  getSavedProducts = () => {
    API.getBookmarks()
    .then(res => {
      console.log(res.data)
      this.setState({ bookmarks: res.data})
    }
    ).catch(err => console.log(err));
  }
    
    render() {
      return (
        <div className="row">
          {this.state.bookmarks.map(bookmark => {
            return (
              <Productcard
                id={bookmark.id}
                title={bookmark.title.slice(0,25)}
                image={bookmark.image}
                url={bookmark.url}
                price={bookmark.price}
              />)
          })}
        </div>
      )
    }
  }
  
export default Bookmarks;
