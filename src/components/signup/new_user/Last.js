import { useDispatch } from 'react-redux';

const Last = (props) => {

    const dispatch = useDispatch();

    return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
            <div className="row">
                <div className="col">
                    <img src="./images/img3.jpeg" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                </div>
                <div className="col" style={{ marginTop: "80px" }}>
                    <div>
                        <h3>Create your Impact Account.</h3>
                    </div>
                    <div>
                        <p style={{ marginTop: "30px" }}>By clicking 'Create your Impact Account', you acknowledge that you have read the Privacy Policy, and agree to the Terms & Conditions and Account Agreement.</p>
                    </div>
                    <button className="btn btn-outline-primary" type="submit" onClick={() => dispatch({ type: "decrement" })}>Back</button>
                    <button className="btn btn-primary" type="submit" style={{marginLeft:"20px"}}>Create your Impact Account</button>
                </div>
            </div>
        </div>
    )
}

export default Last;