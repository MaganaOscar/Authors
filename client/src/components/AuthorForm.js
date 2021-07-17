import React, {useState} from 'react';
//import styles from

export default (props) => {
    const {initName, errors, onSubmitProp} = props;
    const [name, setName] = useState(initName);

    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmitProp({name});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label>Name</label><br/>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <input type="Submit"/>
        </form>
    )
}