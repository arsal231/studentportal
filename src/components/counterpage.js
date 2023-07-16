import {useNavigate  } from 'react-router-dom';
import {Container,Button} from 'react-bootstrap';
import { useState } from 'react';
let currentInterval = 0;
const Counterpage = (props)=>{
    
    // var userId ='';
    // if(localStorage.getItem('user-info'))
    // {
    //   let LoggedInUser = JSON.parse(localStorage.getItem('user-info'));
    //    userId = LoggedInUser.id;
    // }
    const [counter,setCounter] = useState(0);
    const [startnow,setStartnow] = useState(false)
   function startCounter()
   {
    currentInterval =   setInterval(()=>{

        setCounter((x)=>x+1);

    },1000)
    setStartnow(true);
    
   }
   function stopCounter()
   {
    clearInterval(currentInterval);  
    
    setStartnow(false);
   }
   function ResetCounter()
   {
    setStartnow(false);
    clearInterval(currentInterval); 
    setCounter(0); 

   // alert(' i am start reset counter')
   }
    
  // console.log(props);
    return (
     <>
     <Container  style={{paddingTop:30,paddingLeft:220}}>
        <h1>Click Start Button : {
          (counter < 10) ? '0'+counter : counter 
          }
          </h1>


        <Button onClick={startCounter} className='btn btn-success' disabled={startnow}>Start Now</Button> &nbsp;&nbsp;
        <Button onClick={stopCounter} className='btn btn-danger'> Stop </Button>&nbsp;&nbsp;
        <Button onClick={ResetCounter} className='btn btn-warning'> Reset</Button>&nbsp;&nbsp;
     </Container>
        
            
        
        
     </>
    )

}

export default Counterpage;