import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import axios from "axios";



class Saved extends Component {
    state = {
        savedBooks: [],
        initialized: true
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        axios.get("/api/books")
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch((err => console.log(err)))
    }
    render() {
        return (
            <div>
                <Row>
                    <Col size="md-12">
                        
                            <BookList>
                                {this.state.savedBooks.map(book => {
                                    console.log(book)
                                    return (
                                        <div>
                                            <BookListItem
                                                key={book._id}
                                                authors={book.authors}
                                                title={book.title}
                                                synopsis={book.synopsis}
                                                link={book.link}
                                                thumbnail={book.thumbnail}
                                            />
                                            
                                        </div>
                                    )
                                })}
                            </BookList>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Saved;