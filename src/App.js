import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Login from './components/login';
import Register from './components/register';
import Addstudent from './components/addstudent'
import Liststudent from './components/liststudent'
import Middlewhere  from './components/middlewhere'
import Editstudent from './components/editstudent'

import { BrowserRouter,Routes,Link,Route } from 'react-router-dom';
import  {Container,Row} from 'react-bootstrap';



const App=()=>{

  // const [data,setData] = useState('test');
  // const [hideShow,sethideShow] = useState(true);
  // const [Counter,setCounter] = useState(0);
  // const [name,setName] = useState('');

  // const [obje,setObje] = useState([{email:'arslan@yahoo.com',phoneno:'0988888'}]);
 

  return (
    <>
      
      {/* <p>Test {data}</p>

      {
        (hideShow) ? <div >I am div block to be hide show</div> : null
      } */}

{/* <input type="text" name="name"   defaultValue={3} placeholder='enter name' onChange={(e)=>setName(e.target.value)} ></input>
<br/>
<br/><br/>
<input type="text" name="email"   defaultValue={'test@yahoo.com'} placeholder='enter email' onChange={(e)=>setObje({...obje,email:e.target.value})} ></input>
<br/><br/>
<input type="text" name="phone"   defaultValue={'999999'} placeholder='enter name' onChange={(e)=>setObje({...obje,phoneno:e.target.value})} ></input>
<br/>
<b>{name}</b>
<br/>

<b>emial:{obje.email} </b>
<br/>
<b> phone:{obje.phoneno}</b>
<br/> */}

     {/* <button onClick={testfunction}>click me Now </button>
     <button onClick={()=>setData('I am update now')}>Update state Now </button>
     <button onClick={()=>sethideShow(!hideShow)}>Hide BlocK Now </button> */}
     {/* <button onClick={()=>setCounter(Counter+1)}>update Counter{Counter}</button> */}
    
    
     
      {/* //<Sidebar/> */}
     
    
      {/* <Container> */}
      <BrowserRouter>
      <Header/>
     
      
       
            <Routes>
              <Route path='/login' element={<Middlewhere cmp={<Login/>} />}></Route>
              <Route path='/register' element={<Middlewhere cmp={<Register/>} />}></Route>
              <Route path='/addstudent' element={<Addstudent />}></Route>
              <Route path='/liststudent' element={<Liststudent />}></Route>
              <Route path='/editstudent/:id' element={<Editstudent />}></Route>
              <Route path='/*' element={<Liststudent />}></Route>
              {/* <Route path='/register' element={<Register />}></Route> */}
            </Routes>
        
     

     

     <Footer/>
   
     </BrowserRouter>
     {/* </Container> */}
     </>

  );

}

export default App;
