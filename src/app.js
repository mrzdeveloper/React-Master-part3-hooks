import React, { useState } from 'react'
import { list } from './data'

const App = () => {
    const [name, setname] = useState(list)

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