import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const MyContext = createContext()

const Context = ({children}) => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)
  const [titleHeader, setTitleHeader] = useState('')
  return ( 
    <MyContext.Provider value={{active: [active, setActive], titleHeader: [titleHeader, setTitleHeader]}}>
      {children}
    </MyContext.Provider>
   );
}
 
export default Context;