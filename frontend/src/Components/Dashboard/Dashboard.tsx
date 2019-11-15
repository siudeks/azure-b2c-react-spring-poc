import React from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import QueryResultDisplayer from '../QueryResultDisplayer/QueryResultDisplayer';

const query = gql`
  {
    books {
        id
        name
        author {
            id
            name
        }
    }
  }
`;

const Dashboard: React.FC = () => {

    return (
        <div>
            <QueryResultDisplayer query={query}/>
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
