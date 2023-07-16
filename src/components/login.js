import {Form,Button,Spinner,Alert} from 'react-bootstrap';
import {react,useEffect,useState,} from 'react';
import {useNavigate  } from 'react-router-dom';

const Login = (props)=>{

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
    
   //danger
  
    const [loader,setLoader] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    const navigate = useNavigate(); 
    // let LoggedInUser = JSON.parse(localStorage.getItem('user-info'));
    // var userId = LoggedInUser.id;
    // useEffect(()=>{
    //   if(userId){
    //     navigate('/liststudent');
    //   }
    // })
//  let pppp = JSON.parse(localStorage.getItem('user-info'));
  
// console.log(pppp.name);
        function  loginSubmit()
        {
            setLoader(true);
            let feildsData = {email,password};

            fetch("http://127.0.0.1:8000/api/student/login",
            {
             method:'POST',
             headers:
             {
                'Content-type':'application/json',
                'Accept':'application/json',

             },
             body:JSON.stringify(feildsData)

            })
            .then((result)=>{
                    setLoader(false);
                    //console.log('result'+result);
                result.json().then((response)=>
                {
                  console.log(response.code); 
                  if(response.code==200)
                   {
                    setSuccess(true);
                    setError(false);
                    localStorage.setItem("user-info",JSON.stringify(response) );
                    navigate('/liststudent');

                   }
                   else
                   {
                    setError(true);
                    setSuccess(false);
                   }
                })
            
            })

        //    console.log(feildsData);
        }




   
   return (
     <>
     <div className="col-md-6 offset-3 loginblock">
     {
       (success) ? <Alert key='success' variant='success'>User Saved successfully!</Alert>  :''

       
     }

    {
      
       
       (error) ? <Alert key='danger' variant='danger'>Login Failed, Try Valid Credenials</Alert>  :''
     }

     <h3>Login Form</h3>
     
     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
     &nbsp;
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
<br/>
  <Button variant="primary" type="button"  onClick={()=>loginSubmit()}>
  {
                            (!loader) ? 'Login' :  <Spinner as="span"  animation="grow" size="sm"  role="status" aria-hidden="true" />
                            
                        }
  </Button>
</Form>
</div>
     </>
    )

}

export default Login;