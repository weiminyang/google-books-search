
import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {
    // Initialize this.state.books as an empty array
    state = {
        books: [],
        title: ""
    };

    componentDidMount() {
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.title).then(books => {
            let a = []
            for (let i = 0; i < 5; i++) {
                a.push({
                    title: books.data.items[i].volumeInfo.title,
                    authors: books.data.items[i].volumeInfo.authors[0],
                    description: books.data.items[i].volumeInfo.description,
                    image: books.data.items[i].volumeInfo.imageLinks.thumbnail,
                    link: books.data.items[i].volumeInfo.infoLink
                })
            }
            this.setState({
                books: a
            })
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSave = index => {
       
        API.saveBook(this.state.books[index])
            .then(res => {

              alert("saved")
            }
            )
            .catch(err => console.log(err));

    }


    render() {
        return (

            <div>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Book Title">
                </Input>
                <FormBtn onClick={this.handleFormSubmit}>

                    Search
                </FormBtn>
                {this.state.books.length ? (
                    <List>

                        {this.state.books.map((book,index) => (
                            <ListItem key={index}>

                                <a href={book.link}>
                                    <strong>
                                        {book.title}
                                    </strong>

                                </a>
                                <p >by {book.authors}</p>
                                <p><img src={book.image}></img> {book.description}</p>


                                <SaveBtn onClick={() => this.handleFormSave(index)} />
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
export default Search;