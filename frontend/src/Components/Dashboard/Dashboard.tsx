import React from 'react';
import { Link } from 'react-router-dom';
import { useAllBooksQuery } from '../.generated/components'
import QueryResultDisplayer from '../QueryResultDisplayer/QueryResultDisplayer';

const Dashboard: React.FC = () => {

    const result = useAllBooksQuery();
    
    return (
        <div>
            <QueryResultDisplayer {...result} />
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
