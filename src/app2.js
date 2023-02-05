import React, { useState, useEffect } from 'react';
const url = "https://api.github.com/users";

function App2() {
    const [users, setUsers] = useState([]);
    const getUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
    }
    useEffect(() => {
        getUser()

    })

    return (<>





    </>);
}

export default App2;