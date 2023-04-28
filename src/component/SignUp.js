import icon from "../image/c.png"
import profile from "../image/b.jpg";
import email from "../image/email.jpg";
import pass from "../image/pass.png";

import '../App.js'
function Signup() {
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
                        <div>
                            <h2 >Sign Up</h2>
                            <div className="fourth-input">
                            <img src={icon} alt="email" className="email" />
                                <input type="name" placeholder="First name" className="name" />
                            </div>
                            <div className="fourth-input">
                            <img src={icon} alt="pass" className="email" />
                                <input type="name" placeholder="Last name" className="name" />
                            </div>
                            <div>
                                <img src={email} alt="email" className="email" />
                                <input type="email" placeholder="Username" className="name" />
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input type="password" placeholder=" New Password" className="name" />
                            </div>

                            <div className="login-button">
                                <button>Sign Up</button>
                            </div>
                            <div className="signup">
                                <a href="/Login">Already have account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;