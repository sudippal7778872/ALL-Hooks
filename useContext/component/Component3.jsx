import React, { useContext } from 'react'
import { BioData } from './Component1'

const Component3 = () => {
    const name = useContext(BioData);
    return (
        <div>
            <h1>
                hello Component3 {name}
            </h1>
        </div>
    )
}

export default Component3