import React, { createContext } from 'react'
import Component2 from './Component2'

const BioData = createContext();
const Component1 = () => {
    return (
        <div>
        <BioData.Provider value={"sudip pal"}>
        <Component2 />
        </BioData.Provider>
        </div>
    )
}

export default Component1
export {BioData};