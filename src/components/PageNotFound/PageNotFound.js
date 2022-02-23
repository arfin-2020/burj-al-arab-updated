import React from 'react';
import { useParams } from 'react-router-dom';

const PageNotFound = () => {
    const {pageName} = useParams()
    return (
        <div>
            <h1 style={{color:'red', textAlign:'center' }}>This {pageName} page not found</h1>
        </div>
    );
};

export default PageNotFound;