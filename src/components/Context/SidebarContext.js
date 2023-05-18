import React , {useState} from 'react';

const SidebarContext = React.createContext();

export const SidebarStore = (props)=> {

    const [showSidebar, setShowSidebar] = useState(false);
   

    const openSidebar = () => {
      setShowSidebar(true);
    };
  
    const closeSidebar = () => {
      setShowSidebar(false);
    };

    return (
        <SidebarContext.Provider value={{ showSidebar , closeSidebar , openSidebar }}>
            
            {props.children}
    
        </SidebarContext.Provider>
    )
}




export default SidebarContext;