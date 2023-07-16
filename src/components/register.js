
import { useState } from 'react';
import {Form,Button,Spinner,Alert} from 'react-bootstrap';
const Register = (props)=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [loader,setLoader] = useState(false);
    const [success,setSuccess] = useState(false);
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');

        function  registerSubmit()
        {
            setLoader(true);
            let feildsData = {name,email,phone,password,address};

            fetch("http://127.0.0.1:8000/api/student/save",
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
                   if(response.code==200)
                   {
                    setSuccess(true);
                   }
                })
            
            })

        //    console.log(feildsData);
        }


            function submitBtn()
            {
                   return(
                    <>
                   <Button variant="primary" type="button" onClick={()=>registerSubmit()}>
                  
                        {
                            (!loader) ? 'Register Now' :  <Spinner as="span"  animation="grow" size="sm"  role="status" aria-hidden="true" />
                            
                        }
                    
                    
                    </Button>
                    </>
                   )
                 

            }




    return (
     <>
    
        <p>Register Page</p>
        <div className="col-md-8 offset-2 registerblock">
            {
                (success) ? <Alert key='success' variant='success'>User Saved successfully!</Alert>  :''
            }
            
             
            
        <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" placeholder="Jhon Doe" value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Jhon@yahoo.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="email" placeholder="09878798777" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                 <Form.Group controlId="exampleForm.ControlTextarea1"  onChange={(e)=>setAddress(e.target.value)} value={address}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3}></Form.Control>
                      </Form.Group>
                    <br/>
                        {submitBtn()}

                      
        </Form>
        </div>
     </>
    )

}



export default Register;