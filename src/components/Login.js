import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

// Components
import Button from './Button';
import Spinner from './Spinner';
// Styles
import { Wrapper } from './Login.styles';

// Context
import { Context } from '../context';


const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        setLoading(true);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requestToken, username, password);

            setUser({ sessionId: sessionId.session_id, username});
            setLoading(false);
            navigate('/'); // Return to homepage

        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUserName(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <Wrapper>
            { error && <div className='error'>There was an error!</div>}
            <label>Username:</label>
            <input
                type = 'text'
                value = {username}
                name = 'username'
                onChange = { handleInput }
            />
            <input
                type = 'password'
                value = {password}
                name = 'password'
                onChange = { handleInput }
            />
            <Button text = 'Login' callback = { handleSubmit } />
            { loading && <Spinner/>}
        </Wrapper>
    );
};

export default Login;