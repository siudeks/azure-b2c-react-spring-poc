import React from 'react';
import { Book } from '../../.generated/components';
import './BooksList.sass';

interface BooksListProps {
    books: Book[],
    onBookSelected: Function
}

const BooksList: React.FC<BooksListProps> = ({ books, onBookSelected }) => {

    if (books) {
        return (
            <div>
                <ul className="books-list-container">
                    {
                        books.map(b => (<li className="book-item" key={b.id} onClick={(e) => { onBookSelected(b) }}>{b.name} by {b.author.name} {b.author.surname}</li>))
                    }
                </ul>
            </div>
        );
    }

    return (<h2>No data</h2>);
}

export default BooksList;
