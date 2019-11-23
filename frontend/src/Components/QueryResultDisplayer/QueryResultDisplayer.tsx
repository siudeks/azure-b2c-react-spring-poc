import React, { PropsWithChildren } from 'react';
import { ApolloError } from 'apollo-boost';

export interface QueryResultDisplayerProps {
    loading: boolean,
    error: ApolloError | undefined
}

const QueryResultDisplayer: React.FC<PropsWithChildren<QueryResultDisplayerProps>> = ({ loading, error, children} ) => {

    if (loading) return (<p>Loading...</p>);

    if (error) return (
        <div>
            <h1>Error: {error.message}</h1>
            <p>{error.stack}</p>
        </div>
    );

    return children as React.ReactElement;
}

export default QueryResultDisplayer
