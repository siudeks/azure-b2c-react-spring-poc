import React from 'react';
import { Book, useGetBookQuery } from '../../.generated/components';
import QueryResultDisplayer from '../../QueryResultDisplayer/QueryResultDisplayer';
import "./BookDetails.sass"

const BookDetails: React.FC<Book> = (book) => {

    const { data, loading, error } = useGetBookQuery({ variables: { id: book.id } });
    let bookDetails = data && data.book as Book;

    const displayDetails = (bookDetails: Book) => {
        return (
            <div>
                <h3>Details:</h3>
                <p>{bookDetails.ISBN}</p>
                <h2>{bookDetails.name}</h2>
                <p>by {`${bookDetails.author.name} ${bookDetails.author.name}`}</p>
                <p>{bookDetails.description || "No description"}</p>
            </div>
        );
    };

    return (
        <QueryResultDisplayer loading={loading} error={error}>
            <div>
                {bookDetails ? displayDetails(bookDetails) : <b>Book details are missing.</b>}
            </div>
        </QueryResultDisplayer>
    );
}

export default BookDetails
