import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardProps {
}

const Dashboard: React.FC<DashboardProps> = () => {

    return (
        <div>
            <Link to="/logout">Logout</Link>
        </div>);
}

export default Dashboard;
