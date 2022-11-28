import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}><Button variant='light' size="sm">{category.name}</Button></Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;