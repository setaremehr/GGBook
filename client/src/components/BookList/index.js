import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


// BookList renders a bootstrap list item
export function BookList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
}
export class BookListItem extends React.Component {
  render() {
    console.log(this.props)
      ; return (
        <li class="border ">
          <Container>
          <hr />
            <Row>
              <Col size="xs-4 sm-2" >
                <Thumbnail src={this.props.thumbnail} class="rounded-circle" />
              </Col>
              <Col size="xs-8 sm-9">
                <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              <hr />
                <p>
                  {this.props.synopsis}
                </p>
                <a
                  target="_blank"
                  href={this.props.link}
                  rel="noopener noreferrer"
                >
                  See more details!
              </a>
              </Col>
            </Row>
          </Container>
        </li>
      );
  }
}