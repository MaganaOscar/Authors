import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setAuthors(authors.filter(product => product._id != productId));
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }

    return (
        <div>
            <p><Link to="/new">Add an author</Link></p>
            <hr/>
            {loaded && 
                <AuthorList deleteAuthorProp={deleteAuthor} authors={authors} removeFromDom={removeFromDom}/>
            }
        </div>
    )
}