
import React,{useState} from 'react'
// import About from './About';
// import Profile from './Profile';
import {Route,Routes,useNavigate} from 'react-router-dom';
import Two from './Two';
import { AppContext } from './AppContext';

function ReactRouter() {
    const [state,setState] = useState(10)
    const navigate = useNavigate();
    
  return (
    <div>
        {/* <button onClick={()=>setState('about')}>About</button>
        <button onClick={()=>setState('profile')}>Profile</button> */}
        
        {/* <Link to='/about'>About Page</Link>
                <Link to='/profile'>Profile Page</Link> */}

                <button onClick={()=>navigate('/about')}>About Me</button>
                <button onClick={()=>navigate('profile')}>Profile</button>
                <AppContext.Provider value={{data:state}}>
                <Routes>
                
                <Route element={<Two/>} path='/about' />
                <Route render={()=><h1>Hello</h1>} path='/profile'/>
                </Routes>
                </AppContext.Provider>
            
        
      
    </div>
  )
}

export default ReactRouter
