import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import JSONPretty from 'react-json-pretty';
import './monikai.css';

interface QueryResultDisplayerProps {
    query: any
}

//Simple test displayer for graphql queries
const QueryResultDisplayer: React.FC<QueryResultDisplayerProps> = ({ query }) => {

    const { loading, error, data } = useQuery(query);

    if (loading) return (<p>Loading...</p>);

    if (error) return (<p>Error: {error.message}</p>);

    return (<JSONPretty data={data}/>);
}

export default QueryResultDisplayer
