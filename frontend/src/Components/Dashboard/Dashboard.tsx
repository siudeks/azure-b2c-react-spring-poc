import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAllBooksQuery, Book } from '../.generated/components';
import QueryResultDisplayer from '../QueryResultDisplayer/QueryResultDisplayer';
import BooksList from './BooksList/BooksList';
import BookDetails from './BookDetails/BookDetails';
import './Dashbaord.sass';


const Dashboard: React.FC = () => {

    const { data, loading, error } = useAllBooksQuery();
    const [selectedBook, setSelectedBook] = useState<Book>()
    let books: Book[] = (data && data.books && data.books.map(b => b as Book)) || [];

    return (
        <div>
            <div>
                <Link to="/logout">Logout</Link>
            </div>
            <div className="component-container">
                <div className="list-container">
                    <QueryResultDisplayer loading={loading} error={error}>
                        <h3> Books: </h3>
                        <div className="scrollable-container">
                            <BooksList books={books} onBookSelected={setSelectedBook} />
                        </div>
                    </QueryResultDisplayer>
                </div>
                {selectedBook ? (<BookDetails {...selectedBook} />) : <div />}
            </div>
        </div>
    );
}

export default Dashboard;
