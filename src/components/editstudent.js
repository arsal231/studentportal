

import { useEffect, useState } from 'react';
import {Form,Button,Spinner,Alert} from 'react-bootstrap'
import {useParams,useNavigate } from 'react-router-dom';
const Editstudent = (props)=>{
    let routeObject = useParams();
    let navigate = useNavigate();
    console.log(routeObject.id);
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    const [name, setName] = useState();
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [id, setId] = useState();
   


     useEffect(()=>{
      //alert(routeObject.id)
      setId(routeObject.id);
       getStudents(routeObject.id);

     },[])


     async function getStudents(id)
     {
         let responseData = await fetch('http://127.0.0.1:8000/api/student/get/'+id);
         responseData = await responseData.json();
       //  setData(true);
         //setList(responseData);
console.log(responseData);

        setName(responseData.result.name)
        setPhone(responseData.result.phone)
        setEmail(responseData.result.email)
        setAddress(responseData.result.address)

         //console.log(list);
     }
      
     function  updateSubmit()
     {
         setLoader(true);
         let feildsData = {name,email,phone,address};

         fetch("http://127.0.0.1:8000/api/student/update/"+id,
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

                //  const timerId = setInterval(() => {
                //     setSuccess(false);
                //     navigate('/liststudent');
                //   }, 3000)
                }
             })
         
         })

     //    console.log(feildsData);
     }


     function submitBtn()
            {
                   return(
                    <>
                   <Button variant="primary" type="button"  onClick={()=>updateSubmit()} >
                  
                        {
                            (!loader) ? 'Update Now' :  <Spinner as="span"  animation="grow" size="sm"  role="status" aria-hidden="true" />
                            
                        }
                    
                    
                    </Button>
                    </>
                   )
                 
                    }
    return (
     <>
     <rows>
        <div className='col-md-6 offset-3' >
        {
                (success) ? <Alert key='success' variant='success'>User Update successfully!</Alert>  :''
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

               
                    <Form.Group controlId="exampleForm.ControlTextarea1"  onChange={(e)=>setAddress(e.target.value)}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} value={address}></Form.Control>
                      </Form.Group>
                    <br/>
                        {submitBtn()}

                      
        </Form>
        </div>
        </rows>
     </>
    )

}

export default Editstudent;