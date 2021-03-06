import axios from "axios";

// All the client request to the API will be defined in this file.
export default {
  getProducts: function (query, minPrice, maxPrice) {
    return axios.get("/api/gifts", { params: { q: query, minPrice: minPrice, maxPrice: maxPrice } });
  },
  handleTrending: function () {
    return axios.get("/api/trending");
  },

  saveProducts: function (productTobeSaved) {
    return axios.post("/api/bookmarks", productTobeSaved);
  },

  getBookmarks: function () {
    return axios.get("/api/bookmarks");
  },

  deleteBookmarks: function (id) {
    return axios.delete("/api/bookmarks", { data: { id: id } });
  },

  login: function (credentials) {
    return axios.post("/api/login", credentials)
  },

  signup: function (newCredentials) {
    return axios.post("/api/signup", newCredentials)
  },

  getUser: function () {
    return axios.get("/api/user")
  },

  logout: function () {
    return axios.post("/api/user/logout")
  }
};