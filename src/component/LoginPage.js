import profile from "../image/b.jpg";
import email from "../image/email.jpg";
import pass from "../image/pass.png";

import '../App.css'
function Login() {
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
                            <h2 >Log In</h2>
                            <div>
                                <img src={email} alt="email" className="email" />
                                <input type="email" placeholder="Username" className="name" />
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input type="password" placeholder="Password" className="name" />
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
                                <button>Login</button>
                            </div>
                            <div className="signup">
                                <a href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

// export default LoginUi;
export default Login;
