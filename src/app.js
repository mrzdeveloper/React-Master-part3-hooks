import React, { useState, useEffect } from 'react'
import { list } from './data'


const x = 1;
const App = () => {
    useEffect(() => {
        if (x >= 0) {
            console.log("hi")

        } else {
            console.log("mog")
        }
    }, [])

    // const [name, setname] = useState(list)
    // const handeldeletd = (id) => {
    // let new = name.filter((item) => item.id !== id);
    // setname(new)
    // }



    const handleDelet = (id) => {
        let newitem = name.filter((item) => item.id !== id);
        setname(newitem)
    }
    return (<>
        {
            name.map((item) => {
                const { id, name } = item;
                return (
                    <div key={id}>
                        <h1>
                            {name}
                        </h1>
                        <button onClick={() => handleDelet(id)}>delet</button>
                    </div>
                )

            })
        }
        <button onClick={() => setname([])}>clearAll</button>

    </>);
}

export default App;