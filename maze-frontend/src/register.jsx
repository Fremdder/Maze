import React,{useState} from "react"; 
export const Register =(props) =>{
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [name, setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault(); //prevents clearing when reloading
        console.log(email);
        }

    return (
        <div class="auth-form-container">
        <form onSubmit={handleSubmit} class="register-form">
            <h1>Sign-Up</h1>
        <label htmlFor="name">Enter your Name:</label> 
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name here" id="name" name="name" />
            <br />
            <label htmlFor="email">Enter your Email:</label> 
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email" />
            <br />
            <label htmlFor="password">Enter your Password:</label> 
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password here" id="password" name="password" />
            <br />
            <button type="submit" class="submit">Register Here</button>
        </form>
        <button onClick={()=>props.onFormSwitch('login')} class="switch">Already have an Account? Log in Here</button>
        </div>
    )
} 