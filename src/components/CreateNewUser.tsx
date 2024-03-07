import React, { useState } from 'react';

const CreateNewUser: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [github, setGithub] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleGithubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGithub(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // TODO: Handle form submission, e.g. send data to server

        // Reset form fields
        setName('');
        setEmail('');
        setGithub('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="github">GitHub Account:</label>
                <input type="text" id="github" value={github} onChange={handleGithubChange} />
            </div>
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateNewUser;
