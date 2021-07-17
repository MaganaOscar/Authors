import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router'
import AuthorForm from '../components/AuthorForm';

export default () => {
    const [errors, setErrors] = useState([]);

    const createNewAuthor = (author) => {
        axios.post('http://localhost:8000/api/author', author)
            .then((res) => navigate('/'))
            .catch(err => {
                // console.log(err.response.data.error.errors)
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
        }
    return (
        <div>
            <AuthorForm errors={errors} initName="" onSubmitProp={createNewAuthor}/>
            <p><Link to="/">Home</Link></p>
        </div>
    )
}