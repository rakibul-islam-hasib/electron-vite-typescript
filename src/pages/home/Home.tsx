import React from 'react';
import Login from '../login/Login';
import Frame from '../../components/Frame';

const Home: React.FC = () => {
    return (
        <div>
            <Frame />
            <Login />
        </div>
    );
};

export default Home;