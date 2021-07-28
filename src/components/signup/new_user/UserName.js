import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserName = (props) => {

    const dispatch = useDispatch();


    const [errMsg, setErrMsg] = useState({
        firstNameErr: "",
        lastNameErr: ""
    });

    const formValidate = () => {
        if (props.userDetails.firstName.length < 1) {
            setErrMsg({
                ...errMsg,
                firstNameErr: "Pls enter your first name"
            })
        }
        else if (props.userDetails.firstName.length < 2) {
            setErrMsg({
                ...errMsg,
                firstNameErr: "First Name should have minimum 2 characters"
            })
        }
        else if (props.userDetails.firstName.length >= 30) {
            setErrMsg({
                ...errMsg,
                firstNameErr: "First Name cannot have more than 30 characters"
            })
        }
        else {
            setErrMsg({
                ...errMsg,
                firstNameErr: ""
            })
        }
    }

    const formValidate1 = () => {
        if (props.userDetails.lastName.length < 1) {
            setErrMsg({
                ...errMsg,
                lastNameErr: "pls enter your last name"
            })
        }
        else if (props.userDetails.lastName.length >= 30) {
            setErrMsg({
                ...errMsg,
                lastNameErr: "Last Name cannot have more than 30 characters"
            })
        }
        else {
            setErrMsg({
                ...errMsg,
                lastNameErr: ""
            })
        }
    }


    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "increment" });
    }

    return (
        <>
            <div className="row" style={{ marginTop: "120px" }}>
                <div className="col ">
                    <img src="./images/img3.jpeg" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                </div>
                <div className="col" style={{ marginTop: "70px" }}>
                    <h4>Create the change you want to see in the world</h4>
                    <p style={{ marginTop: "20px" }}>Tell us about yourself.</p>
                    <form>
                        <div className="mb-3" style={{ marginTop: "30px" }}>
                            <label className="form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={props.userDetails.firstName} name="firstName" onBlur={formValidate} placeholder="Your first name" onChange={props.changeHandler} />
                            </div>
                            <p className="text-danger">{errMsg.firstNameErr === "" ? null : <i className="bi bi-exclamation-circle-fill"></i>}{errMsg.firstNameErr}</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={props.userDetails.lastName} name="lastName" onBlur={formValidate1} placeholder="Your last name" onChange={props.changeHandler} />
                            </div>
                            <p className="text-danger">{errMsg.lastNameErr === "" ? null : <i className="bi bi-exclamation-circle-fill"></i>}{errMsg.lastNameErr}</p>
                        </div>
                        <button type="submit" disabled={props.userDetails.firstName.length < 2 || !props.userDetails.lastName} onClick={onSubmit} className="btn btn-primary">Continue</button>
                    </form>
                </div>
            </div>

        </>
    )
}


export default UserName;