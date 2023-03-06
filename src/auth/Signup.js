import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
import "./Signup.css";
  function Signup() {
    const navigate=useNavigate();

    const [registerInput,setregisterInput]=useState({
      Username:"",
      Email:"",
      Password:""
  });

  const handleInput=(e)=>{
    setregisterInput({...registerInput,[e.target.name]:e.target.value})
  }

  const registerSubmit=(e)=>{
    e.preventDefault();
    try{
      const data ={
        Username:registerInput.Username,
        Email:registerInput.Email,
        Password:registerInput.Password
            }

            fetch(`${API}/users/signup`,{
              method: 'POST',
              crossDomain:true,
              headers: {"Content-Type":"application/json", },
            body:JSON.stringify(data),
          }).then((res)=>{
            if(res.status=="200"){
              alert("Registration Success")
              navigate("/login")
            }
          })
    }catch(err){
      alert("Message:",err.message)
    }
  }
  

         return (
           <Form onSubmit={registerSubmit}>
               <div className='container'>   
               <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Username</Form.Label>
               <Form.Control type="text" name='Username' placeholder="Enter Username" onChange={handleInput} value={registerInput.Username} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" name='Email' placeholder="Enter email" onChange={handleInput} value={registerInput.Email} />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name='Password' placeholder="Password" onChange={handleInput} value={registerInput.Password}/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
             <Button variant="primary" type="submit">
               Submit
             </Button>
               </div>
            
           </Form>
         );
       }
       
   export default Signup;
     


