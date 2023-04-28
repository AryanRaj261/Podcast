import profile from "../image/b.jpg";
import ema from "../image/email.jpg";
import pass from "../image/pass.png";
import { useState } from "react";
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password,
            }),
        }).then((res)=>res.json())
        .then((data)=>console.log(data,"registered"));
  };

    return (
        <>
            <div className="main">
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div>
                            <h2 >Log In</h2>
                            <div>
                                <img src={ema} alt="email" className="email" />
                                <input type="email" placeholder="Username" className="name" onChange={e=>setEmail(e.target.value)} />
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input type="password" placeholder="Password" className="name" onChange={e=>setPassword(e.target.value)} />
                            </div>
                            <p className="link">
                                <a href="/">Forgot password ?</a>
                            </p>
                            <div className="third-input">
                                <input class="form-check-input mx-2" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck"> Remember me
                                </label>
                            </div>
                            <div className="login-button">
                                <button type="submit">Login</button>
                            </div>
                            <div className="signup">
                                <a href="/signup">Sign Up</a>
                            </div>
                        </div>
                        </form>
                    </div>


                </div>
            </div>
        </>
    );
}

// export default LoginUi;
export default Login;