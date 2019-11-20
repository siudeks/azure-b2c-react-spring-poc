import React from 'react';
import { Link } from 'react-router-dom';
import { useAllBooksQuery } from '../.generated/components';
import QueryResultDisplayer from '../QueryResultDisplayer/QueryResultDisplayer';
import BooksList from './BooksList';

const Dashboard: React.FC = () => {

    const { data, loading, error } = useAllBooksQuery();

    return (
        <div>
            <QueryResultDisplayer loading={loading} error={error}>
                {data ? (<BooksList {...data} />) : (<p>No data</p>)}
            </QueryResultDisplayer>
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
