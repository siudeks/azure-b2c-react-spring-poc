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

    const [searchPharse, setSearchPharse] = useState<string>("");
    const filterBooks = (book: Book) => !searchPharse || book.name.includes(searchPharse) || book.author.name.includes(searchPharse) || book.author.surname.includes(searchPharse);

    return (
        <div>
            <div>
                <Link to="/logout">Logout</Link>
            </div>
            <div className="component-container">
                <div className="list-container">
                    <h3> Books: </h3>
                    <input type="text" className="searh-input" maxLength={255} value={searchPharse} onChange={(e) => setSearchPharse(e.target.value)} placeholder="Search for book" />
                    <div className="scrollable-container">
                        <QueryResultDisplayer loading={loading} error={error}>
                            <BooksList books={books.filter(filterBooks)} onBookSelected={setSelectedBook} />
                        </QueryResultDisplayer>
                    </div>
                </div>
                {selectedBook ? (<BookDetails {...selectedBook} />) : <div />}
            </div>
        </div>
    );
}

export default Dashboard;
