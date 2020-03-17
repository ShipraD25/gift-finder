
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
        
        this.setState({ bookmarks: res.data })
      }
      ).catch(err => console.log(err));
  }

  handleDelete = id => {
    API.deleteBookmarks(id).then(result => {
      const filtered = this.state.bookmarks.filter(bookmark => bookmark.id !== id)
      this.setState({ bookmarks: filtered })
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.bookmarks.map(bookmark => {
          return (
            <Productcard
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title.slice(0, 25)}
              image={bookmark.image}
              url={bookmark.url}
              price={bookmark.price}
              handleDelete={this.handleDelete}
            />)
        })}
      </div>
    )
  }
}

export default Bookmarks;
