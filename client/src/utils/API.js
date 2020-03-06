import axios from "axios";

// All the client request to the API will be defined in this file.
export default {
  getProducts: function(query, minPrice, maxPrice) {
    return axios.get("/api/gifts", { params: { q: query, minPrice: minPrice, maxPrice: maxPrice} });
  },
  
  saveProducts: function(productTobeSaved) {
    return axios.post("/api/bookmarks", productTobeSaved);
  },

  getBookmarks: function() {
    return axios.get("/api/bookmarks");
  }
};