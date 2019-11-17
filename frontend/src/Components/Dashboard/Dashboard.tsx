import React from 'react';
import { Link } from 'react-router-dom';
import GetAllBooks from '../../GlobalQueries/GetAllBooks';
import { GetAllBooks as Books } from '../../GlobalQueries/types/GetAllBooks';
import { Query } from 'react-apollo';
import QueryResultDisplayer from '../QueryResultDisplayer/QueryResultDisplayer';

const Dashboard: React.FC = () => {

    return (
        <div>
            {/*  ToDo: refactor, code is not very readable and looks hacky :| */}
            <Query<Books, Books> query={GetAllBooks}>
                {
                    //this wrapper seems to be necessary...
                    (result) => <QueryResultDisplayer {...result} />
                }
            </Query>
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
