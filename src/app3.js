import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users'

const App3 = () => {
    const [user, setuser] = useState([])
    const getdata = async () => {
        const response = await fetch(url);
        const user = await response.json();
        setuser(user);
        console.log(user)
    }
    useEffect(() => {
        getdata()
    }, [])



    return (<>
    </>);
}

export default App3;    