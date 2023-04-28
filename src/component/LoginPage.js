import profile from "../image/b.jpg";
import ema from "../image/email.jpg";
import pass from "../image/pass.png";
import {useState} from 'react'
import '../App.css'
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({email, password });
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
            <div>
            <form onSubmit={handleSubmit}>
              <h2 >Log In</h2>
              <div>
                <img src={ema} alt="email" className="email" />
                <input type="email" placeholder="Username" className="name" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="Password" className="name" onChange={(e) => setPassword(e.target.value)}/>
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
                <a href="/">Sign Up</a>
              </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

// export default LoginUi;
export default Login;
