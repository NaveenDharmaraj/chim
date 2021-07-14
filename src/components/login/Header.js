import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
            <div className="container-fluid" style={{position:'fixed',backgroundColor:"white",top:"0px",boxShadow:"0px 0px 8px 2px grey"}}>
                <div className="row">
                    <div className="col-8">
                        <img src="./images/img1.jpeg" alt="charitable impact" width="150px" height="80px" />
                    </div>
                    <div className="col-2" style={{paddingTop:"25px"}}>
                        <span>Don't have an Account?</span>
                    </div>
                    <div className="col-1" style={{paddingTop:"20px"}}>
                        <Link to="/" className="btn btn-primary">signup</Link>
                    </div>
                </div>
            </div >
    )
}

export default Header;