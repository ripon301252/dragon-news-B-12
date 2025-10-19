import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navigate to={`/category/1`} className='font-bold'>Home</Navigate>
        </div>
    );
};

export default Home;