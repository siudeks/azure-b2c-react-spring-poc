import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

interface DashboardProps {

}

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

const Dashboard: React.FC<DashboardProps> = () => {

    const { loading, error, data } = useQuery(query);

    const displayData = () => {
        if (loading) return (<p>Loading...</p>);
        if (error) return (<p>Error: {error.message}</p>);
        return (<p>{JSON.stringify(data)}</p>);
    }

    return (
        <div>
            {displayData()}
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
