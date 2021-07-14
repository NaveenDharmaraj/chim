import React from 'react';
import Header from './Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className="row" style={{marginTop:"120px"}}>
                <div className="col">
                    <div>
                        <img src="./images/img3.jpeg" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                    </div>
                </div>
                <div className="col" style={{marginTop:"40px", paddingLeft:"40px"}}>
                    <div>
                        <h2 style={{paddingLeft:"20px"}}>Log in to Charitable Impact</h2>
                        <form>
                            <div className="col-sm-8 mt-5">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                            </div>
                            <div className="col-sm-8 mt-5">
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </div>
                            <div><p className="col mt-3" style={{paddingLeft:"250px"}}>Forgot your password?</p></div>
                            <div><button className="btn btn-primary" type="button" style={{marginLeft:"160px", borderRadius:"10px"}}>Login</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;