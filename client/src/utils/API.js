import axios from "axios";

// set google books API link
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAGmzeDeys_THxoklJzvkGsRA1QBIhfIgQ";

export default {
  // get data from google books API
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  //get data from server database
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

