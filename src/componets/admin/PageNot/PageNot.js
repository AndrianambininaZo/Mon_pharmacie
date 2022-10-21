import React from 'react';
import './pageNot.scss'
import { Link } from 'react-router-dom';

const PageNot = () => {
    return (
        <div className='pageNot'>
            <div className='div'>
                <h1>Page Not Found</h1>
                <h3>This URL is not correct</h3>                
                <button><Link to='/'>Go to home page</Link></button>
            </div>
        </div>
    );
};

export default PageNot;