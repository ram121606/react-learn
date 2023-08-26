
import { createContext ,useState} from "react";
import { Outlet } from "react-router-dom";

export const Context = createContext({});


export default function ContextProvider() {
 
    const [state,setState] = useState("")

  return (
     <Context.Provider value={{state,setState}}>
        <Outlet/>
     </Context.Provider>
  )
}

