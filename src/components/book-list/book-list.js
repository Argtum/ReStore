import React, {Component} from "react";

import "./book-list.css";
import {BookListItem} from "../book-list-item";

export default class BookList extends Component {
  render() {
    //const {books} = this.props;
    const books = [
      {
        id: 1,
        title: `Production-Ready Microservices`,
        author: `Susan J. Fowler`
      },
      {
        id: 2,
        title: `Release It!`,
        author: `Michael T. Nygard`
      }
    ]

    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}
