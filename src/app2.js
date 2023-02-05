import React, { useState, useEffect } from 'react';
const url = "https://api.github.com/users";

function App2() {
    const [users, setUsers] = useState([]);
    const getUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
        console.log(users);
    }
    useEffect(() => {
        getUser()

    }, [])
    users.map((item) => {

    })
    return (<>
        <ul>
            {users.map((item) => {
                const { id, avatar_url } = item;
                return (
                    <>
                        <li>{id}</li>
                        <li>{avatar_url}</li>
                    </>
                )


            })}
        </ul>
    </>);
}

export default App2;