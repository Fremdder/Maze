import React,{useState} from "react"; //useState is to take inputs
export const Login =(props) =>{
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
const handleSubmit=(e)=>{
e.preventDefault(); //prevents clearing when reloading
console.log(email);
}

    return (
        <div class="auth-form-container">
        <form onSubmit={handleSubmit} class="login-form">
            <h1>Log-In</h1>
            <label htmlFor="email">Enter your Email:</label> 
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email" />
            <br />
            <label htmlFor="password">Enter your Password:</label> 
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password here" id="password" name="password" />
            <br />
            <button type="submit" class="submit">Log In</button>
        </form>
        <button onClick={()=>props.onFormSwitch('register')} class="switch">Dont have an Account? Register Here</button>
        </div>
        
    )
} 