 import "./Login.css";
 import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
  function Login() {
    const navigate=useNavigate();

    const [registerInput,setRegisterInput]=useState({
      username:"",
      password:""
  });

  const handleInput=(e)=>{
    setRegisterInput({...registerInput,[e.target.name]:e.target.value})
  }


  const registerSubmit=(e)=>{

    e.preventDefault();
try{

  const data={
    username:registerInput.username,
    password:registerInput.password
  }
  console.log(data);
  fetch(`http://localhost:9000/users/login`,{
    method: 'POST',
    crossDomain:true,
    headers: {
      "Content-Type":"application/json", 
     },
    body :JSON.stringify(data),
  }).then((res)=>res.json()).then((data)=>{
      alert("Login Successfully")
      console.log(data)
      localStorage.setItem("token",data.token)
      localStorage.setItem("id",data.id)
      navigate("/")
    }
  )

}catch(err){
  console.log(err)
}
    
  }  
          return (
            <>
            <div className='auth'>
              <div className='auth-container'>
                  <div className='sign-up body'></div>
                    <h1>User's Login</h1>
                    <form onSubmit={registerSubmit}>
                      <div className="input-field">
                        <p>Username</p> 
                        <input name='username' type="text" placeholder="Username" onChange={handleInput} style={{padding:"3px"}} />
                      </div>

                      <div className="input-field">
                        <p>Password</p> 
                        <input name='password' type="password" placeholder="Password" onChange={handleInput} style={{padding:"3px"}} />
                      </div>

                      <button>
                        Login
                      </button>
                    </form>
                  </div>
              </div>
            
            

          </>
          );
        }

export default Login;