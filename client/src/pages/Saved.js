
import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
// import SaveBtn from "../components/SaveBtn";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
    // Initialize this.state.books as an empty array
    state = {
        books: [],

    };

    componentDidMount() {

        this.loadBooks();
        
    }

    loadBooks(){
        API.getBook().then(res => {
            this.setState({ books: res.data })
        })
            .catch(err => console.log(err));
    }

    handleDelete = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };


    render() {
        return (
            <div>
                <h3>Saved Books</h3>
                {this.state.books.length ? (
                    <List>

                        {this.state.books.map(book => (
                            <ListItem key={book._id}>

                                <a href={book.link}>
                                    <strong>
                                        {book.title}
                                    </strong>

                                </a>
                                <DeleteBtn onClick={() => this.handleDelete(book._id)} />
                                <p >by {book.authors}</p>
                            
                                <p className="float-left" style={{textAlign: "center" ,}}><img className="float-left" src={book.image} ></img> {book.description}</p>

                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        )
    }


}
export default Saved;