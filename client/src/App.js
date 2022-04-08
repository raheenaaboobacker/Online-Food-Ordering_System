import React,{createContext,useState} from 'react';
import Login from "./pages/user/login/Login"
import Home from './pages/home/Home';
import './App.css';
import Register from './pages/user/register/Register';
import Adminhome from './pages/admin/adminhome/Adminhome';
import Additem from './pages/admin/additems/Additem';
import AddCategory from './pages/admin/addCategory/AddCategory';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Showitems from './pages/admin/Showitems/Showitems';
import Updateitem from './pages/admin/updateitem/Updateitem';
import Showuseritems from './pages/user/showuseritems/Showuseritems';  

import {Logincontext} from "./context/Logincontext"
import Addtocart from './pages/user/addtocart/Addtocart';
import Userhome from './pages/user/userhome/Userhome';

function App() {

  const [userContacts,setUserContacts]=useState({
    name:" ",
    id:" "
  })
  // const getData=(a)=>{
  //   console.log(a)
  //   setContacts([...contacts,{...a}])
  // }
  // useEffect(()=>{
  //   const localdata=JSON.parse(localStorage.getItem("contactslocal"));
  //   setContacts(localdata)
  //   console.log(contacts);
  // },[])
  
  return (
   
    <div className="App">
      <Logincontext.Provider value={{userContacts,setUserContacts}}>
      <BrowserRouter>
      <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/userhome' element={<Userhome/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route  path='/adminhome' element={<Adminhome/>} />
      <Route exact path='/addcategory' element={<AddCategory/>}/>
      <Route exact path='/showitems/:id' element={<Showitems/>}/>
      <Route exact path='/showuseritems/:id' element={<Showuseritems/>}/>
      <Route exact path='/additem/:id' element={<Additem/>}/>
      <Route exact path='/updateitem/:id' element={<Updateitem/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/addtocart' element={<Addtocart/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>
      </Logincontext.Provider>
  
    </div>
  );
}

export default App;
