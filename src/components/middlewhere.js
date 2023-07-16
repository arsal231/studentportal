import {useNavigate  } from 'react-router-dom';
import {Container} from 'react-bootstrap';
const Middlewhere = (props)=>{
    const navigate = useNavigate(); 
    var userId ='';
    if(localStorage.getItem('user-info'))
    {
      let LoggedInUser = JSON.parse(localStorage.getItem('user-info'));
       userId = LoggedInUser.id;
    }
  
    
  // console.log(props);
    return (
     <>
        {
          (!userId) ? 
            <Container> 
             {props.cmp}
            </Container> 
            :
             <p>not valid URL</p>  
         
        }
            
        
        
     </>
    )

}

export default Middlewhere;