import React, { useState } from 'react';
import UserName from '../new_user/UserName';
import UserLogin from '../new_user/UserLogin';
import Questions from '../new_user/Questions';
import Last from '../new_user/Last';
import { useSelector } from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css";

const Content = () => {

    const count = useSelector(state => state.count);
    const [valid, setValid] = useState({
        valid1: 0,
        valid2: 0
    });

    const checkMail = (val) =>{
        setValid({
            ...valid,
            valid1: val
        })
    }
    const checkPass = (val) =>{
        setValid({
            ...valid,
            valid2: val
        })
    }

    const [style, setStyle] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false,
        button5: false
    })

    const onClickButton = (e) => {
        if (e.target.value === "false") {
            setStyle({
                ...style,
                [e.target.name]: true
            })
        }
        else {
            setStyle({
                ...style,
                [e.target.name]: false
            })
        }

    }

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })


    const changeHandler = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const renderSwitch = (count) => {
        switch (count) {
            case 0:
                return (
                    <UserName userDetails={userDetails} changeHandler={changeHandler} />
                )

            case 1:
                return (
                    <UserLogin userDetails={userDetails} changeHandler={changeHandler} valid={valid} checkMail={checkMail} checkPass={checkPass} />
                )
            case 2:
                return (
                    <Questions onClickButton={onClickButton} style={style} />
                )
            case 3:
                return (
                    <Last style={style} userDetails={userDetails} />
                )
            default:
                break;
        }
    }

    return (
        <div className="container-fluid" >
            {renderSwitch(count)}
        </div>
    );
}

export default Content;