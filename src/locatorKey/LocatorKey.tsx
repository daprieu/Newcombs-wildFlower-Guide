import React, {useContext, useEffect} from 'react'
import { LocatorKeyContext } from '../providers/LocatorKeyProvider';



interface Props {
    props?: any
}

const LocatorKey = (props: Props) => {
    const {key} = useContext(LocatorKeyContext)
    
    console.log('key: ', key);
    switch (key) {
        case 111:
            console.log("It is a Sunny day")
            break;
        default:
            console.log("DNE")
            break;
    }
    return (
        <div>
            
        </div>
    )
}

export default LocatorKey
