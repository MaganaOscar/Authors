import React from 'react';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom, deleteAuthorProp, authors} = props;

    const deleteAuthor = authorId => {
        deleteAuthorProp(authorId, removeFromDom);
    }

    return (
        <div>
            <h2>Favorite authors</h2>
            {authors.map((author, idx)=>{
                return (
                    <div key={idx}>
                        <p>{author.name}</p>
                        <p><Link to={`/edit/${author._id}`}>Edit</Link></p>
                        <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}