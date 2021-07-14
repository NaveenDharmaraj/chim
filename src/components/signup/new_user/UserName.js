import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserName = (props) => {

    const dispatch = useDispatch();


    const [firstNameErr, setfirstNameErr] = useState({});
    const [lastNameErr, setlastNameErr] = useState({});

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "increment" });
    }

    const formValidate = () => {
        const firstNameErr = {};

        if (props.userDetails.firstName.length < 1) {
            firstNameErr.msg = "Pls enter your first name";
        }
        else if (props.userDetails.firstName.length < 2) {
            firstNameErr.msg = "First Name should have minimum 2 characters"
        }
        setfirstNameErr(firstNameErr);
    }
    const formValidate1 = () => {
        const lastNameErr = {};

        if (props.userDetails.lastName.length < 1) {
            lastNameErr.msg = "pls enter your last name";
        }
        setlastNameErr(lastNameErr);
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
                            <p className="text-danger">{firstNameErr.msg}</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={props.userDetails.lastName} name="lastName" onBlur={formValidate1} placeholder="Your last name" onChange={props.changeHandler} />
                            </div>
                            <p className="text-danger">{lastNameErr.msg}</p>
                        </div>
                        <button type="submit" disabled={props.userDetails.firstName.length < 2 || !props.userDetails.lastName} onClick={onSubmit} className="btn btn-primary" style={{ marginTop: "40px" }}>Continue</button>
                    </form>
                </div>
            </div>

        </>
    )
}


export default UserName;