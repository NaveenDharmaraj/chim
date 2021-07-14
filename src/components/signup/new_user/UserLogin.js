import React, { useState } from "react";
import { useDispatch } from "react-redux";

const UserLogin = (props) => {
    const dispatch = useDispatch();

    const sampleEmail = ["naveen@gmail.com", "dnaveen@gmail.com"];

    const [mailErr, setmailErr] = useState({});
    const [passwordErr, setpasswordErr] = useState({});
    const [isShow, setShow] = useState(0);

    const clickHandler = (event) => {
        event.preventDefault();
        dispatch({ type: "increment" });
    }
    const click = () => {
        const mailErr = {};
        const reg = /@gmail.com$/gi;

        if (props.userDetails.email.length < 1) {
            mailErr.msg = "Pls enter Email";
            props.checkMail(0);
        }
        else {
            if (!reg.test(props.userDetails.email)) {
                mailErr.msg = "Pls enter valid gmail";
                props.checkMail(0);
            }
            else {
                if (sampleEmail.includes(props.userDetails.email)) {
                    mailErr.msg = "Look this mail is already exist"
                    props.checkMail(0);
                }
                else {
                    props.checkMail(1);

                }

            }
        }
        setmailErr(mailErr);

    }
    const click1 = () => {
        const passwordErr = {};
        const regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})")

        if (props.userDetails.password.length < 1) {
            passwordErr.msg = "Pls enter password";
            props.checkPass(0);
        }
        else if (props.userDetails.password.length >= 1) {
            if (!regPass.test(props.userDetails.password)) {
                passwordErr.msg = "It is too weak";
                props.checkPass(0);
            }
            else {
                props.checkPass(1);
            }
        }
        setpasswordErr(passwordErr);
    }
    const regex1 = /[a-z]/g;
    const case1 = regex1.test(props.userDetails.password);
    const s1 = {
        color: case1 ? "blue" : "black"
    }
    const regex2 = /[A-Z]/g;
    const case2 = regex2.test(props.userDetails.password);
    const s2 = {
        color: case2 ? "blue" : "black"
    }
    const regex3 = /[!@#\$%\^&\*]/g;
    const case3 = regex3.test(props.userDetails.password);
    const s3 = {
        color: case3 ? "blue" : "black"
    }
    const case4 = (props.userDetails.password.length >= 8)
    const s = {
        color: case4 ? "blue" : "black"
    }
    const showpassword = () => {
        if (isShow) {
            setShow(0);
        }
        else {
            setShow(1);
        }
    }
    return (
        <>
            <div className="row" style={{ marginTop: "120px" }}>
                <div className="col ">
                    <img src="./images/img3.jpeg" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                </div>
                <div className="col" style={{ paddingTop: "60px" }}>
                    <h3>Create your Impact Account</h3>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" name='email' onBlur={click} value={props.userDetails.email} placeholder="Your e-mail" onChange={props.changeHandler} />
                        </div>
                        <p className="text-danger">{mailErr.msg}</p>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-9">
                        <label className="form-label">password</label>
                        </div>
                        <div className="col-2">
                        <div onClick={showpassword} ><i className="bi bi-eye-fill" ></i></div>
                        </div>
                        </div>
                        <div className="col-sm-10">
                            <input type={isShow ? "text" : "password"} className="form-control" name='password' onBlur={click1} value={props.userDetails.password} placeholder="your password" onChange={props.changeHandler} />
                            {/* <button className="btn btn-primary" onClick={showpassword}>Clickme</button> */}
                        </div>
                        <p className="text-danger">{passwordErr.msg}</p>
                        <div style={{ fontSize: "13px" }}>
                            <p style={s}>{props.userDetails.password.length}/8 characters,</p>
                            <p style={s1}>lowercase letters (a-z),</p>
                            <p style={s2}>uppercase letters (A-Z),</p>
                            <p style={s3}>special characters (e.g. !@#$%^&*)</p>
                        </div>
                    </div>
                    <div className="panel-footer row">
                        <div className="col-6">
                            <div className="previous">
                                <button type="submit" className="btn btn-outline-primary" onClick={() => dispatch({ type: "decrement" })}>Back</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="next">
                                <button type="submit" disabled={!props.valid.valid1 || !props.valid.valid2} className="btn btn-primary" onClick={clickHandler}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin;