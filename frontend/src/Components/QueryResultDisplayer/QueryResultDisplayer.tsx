import React from 'react';
import JSONPretty from 'react-json-pretty';
import './monikai.css';
import { QueryResult } from 'react-apollo';

const QueryResultDisplayer: React.FC<QueryResult> = ({ loading, error, data }) => {

    if (loading) return (<p>Loading...</p>);

    if (error) return (<p>Error: {error.message}</p>);

    return (<JSONPretty data={data} />);
}

export default QueryResultDisplayer
