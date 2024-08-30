import React, { useState } from 'react';

const UserForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            onAdd({ name, email });
            setName('');
            setEmail('');
        }
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label>Name : </label>
            <input
                type="text"
                placeholder="Enter the name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
             <label>Email : </label>
            <input
                type="email"
                placeholder="Enter the email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="btn" type="submit">Add User</button>
        </form>
    );
};

export default UserForm;