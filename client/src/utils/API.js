import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAGmzeDeys_THxoklJzvkGsRA1QBIhfIgQ";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getBook: function(bookData) {
    return axios.get("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};

