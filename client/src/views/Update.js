import React, { useEffect, useState } from 'react'
import { navigate,Link } from '@reach/router';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
export default props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => navigate('/'))
            .catch(err => {
                // console.log(err.response.data)
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            {loaded && (
            <>
            <h1>Update a Product</h1>
            <AuthorForm
                errors={errors}
                onSubmitProp={updateAuthor}
                initName={author.name}
            />
            <p><Link to="/">Home</Link></p>
            </>
            )}
        </div>
    )
}