import React, { useState, createContext } from "react"


export interface IProviderProps {
    children?: any;
}
type LocatorKeyState = {
    key: number;
    setKey: (key: number) => void;
  };
const contextDefaultValues: LocatorKeyState = {
    key: 0,
    setKey: () => {}
  };
export const LocatorKeyContext = createContext(contextDefaultValues);

export const LocatorKeyProvider = (props: IProviderProps) => {
    const [key, setStateKey] = useState<number>(0)
    console.log('keyprovider: ', key);
    const setKey = (newKey: number) => setStateKey(newKey);


    return (
        <LocatorKeyContext.Provider value={{key, setKey}}>
            {props.children}
        </LocatorKeyContext.Provider>
    );
};