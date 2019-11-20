import React from 'react';
import { AllBooksQuery } from '../.generated/components';


const BooksList: React.FC<AllBooksQuery> = ({ books }) => {

    if (books) {
        return (
            <ul>
                {
                    books.map(b => (<li>{b.name} by {b.author.name} {b.author.surname}</li>))
                }
            </ul>
        );
    }

    return (<h2>No data</h2>);
}

export default BooksList;
