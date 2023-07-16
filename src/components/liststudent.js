import react,{ useEffect, useState } from 'react';
import {Table,Spinner ,Modal,Button,Container} from 'react-bootstrap';
import { Link, json } from 'react-router-dom';






const Liststudent = (props)=>{
  const [data,setData] = useState(false);
  const [list,setList] = useState([]);
  const [deleteId,setdeleteId] = useState('');
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);

  useEffect( ()=>{
    //if(!data && data===false){
      getStudents();
    // 
  //}
  },[])
 

 function deleteStudent(id)
{
  setShow(true);
  setdeleteId(id);
}


async function getStudents()
{
  let responseData = await fetch('http://127.0.0.1:8000/api/student/listing');
  responseData = await responseData.json();
  setData(true);
  setList(responseData);
  console.log(list);
}

async function handleconfirm()
{
  
  setShow(false);
    let responseResult = await fetch('http://127.0.0.1:8000/api/student/delete/'+deleteId,{
  method:'DELETE',
  });

  responseResult = await responseResult.json();
  console.log(responseResult);
  getStudents();
}





    return (
     <>
     <Container>
     <h3>Student Listing</h3>
    
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleconfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>



 
     <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
       (!data) ? 
       <Spinner animation="border" role="status" className=' offset-5'>
       <span className="visually-hidden">Loading...</span>
       </Spinner>
       
       :''

     }
   {
    list.map((item,index)=>
    
      <tr  key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>
         <span onClick={()=>deleteStudent(item.id)} className='btn btn-danger btn-sm'> Delete</span>
          <br/>
          <Link to={"editstudent/"+item.id} className='btn btn-warning btn-sm'> Edit</Link>

        </td>
       </tr>
    )
         
   }
   
   
    
  
  </tbody>
</Table>
   </Container>
  
     </>
    )

}



export default Liststudent;