import { createContext, useState } from "react";

export const LotrContext = createContext();

export const LotrContextProvider = ({children}) =>{

    const [name,setName] = useState('O Senhor dos Anéis')

    return(
        <LotrContext.Provider value={{name,setName}}>
            {children}
        </LotrContext.Provider>
    )
}

