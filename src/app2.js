import React, { useState, useEffect } from 'react';
const url = "https://api.github.com/users";


function App2() {
    const [users, setUsers] = useState([]);
    const getUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        console.log(response)
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
                const { id, avatar_url, login } = item;
                return (
                    <>
                        <li key={id}>

                            <li>{id}</li>
                            <img src={avatar_url} alt={login} />
                            <li>{login}</li>
                        </li>
                    </>
                )


            })}
        </ul>
    </>);
}

export default App2;