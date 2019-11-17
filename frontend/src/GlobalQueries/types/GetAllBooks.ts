/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllBooks
// ====================================================

export interface GetAllBooks_books_author {
  __typename: "Author";
  id: number;
  name: string;
}

export interface GetAllBooks_books {
  __typename: "Book";
  id: number;
  name: string;
  author: GetAllBooks_books_author;
}

export interface GetAllBooks {
  books: GetAllBooks_books[] | null;
}
