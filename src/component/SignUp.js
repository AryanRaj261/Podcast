// require('./backend/signup_B')
import icon from "../image/c.png"
import profile from "../image/b.jpg";
import ema from "../image/email.jpg";
import pass from "../image/pass.png";
import { useState } from "react";
function SignUp() {
    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/signup",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Firstname:first,
                Lastname:last,
                email,
                password,
            }),
        }).then((res)=>res.json())
        .then((data)=>console.log(data,"registered"));

    }
    return (
        <>
            <div className="main">
                <div className="main2">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div>
                            <h2 >Sign Up</h2>
                            <div className="fourth-input">
                            <img src={icon} alt="email" className="email" />
                                <input type="name" placeholder="First name" className="name" onChange={e=>{setFirst(e.target.value
                                 )}}/>
                            </div>
                            <div className="fourth-input">
                            <img src={icon} alt="pass" className="email" />
                                <input type="name" placeholder="Last name" className="name" onChange={e=>{setLast(e.target.value
                                 )}} />
                            </div>
                            <div>
                                <img src={ema} alt="email" className="email" />
                                <input type="email" placeholder="Email" className="name" onChange={e=>{setEmail(e.target.value
                                 )}} />
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input type="password" placeholder="Password" className="name" onChange={e=>{setPassword(e.target.value
                                 )}}/>
                            </div>

                            <div className="login-button">
                                <button type="submit">Sign Up</button>
                            </div>
                            <div className="signup">
                                <a href="/Login">Already have account</a>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;