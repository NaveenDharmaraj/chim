import { useDispatch } from 'react-redux';

const Questions = (props) => {
    const dispatch = useDispatch();
    const clickHandler = () => { dispatch({ type: "decrement" }) };
    const submitHandler = () => { dispatch({ type: "increment" }) };

    const selectHandler = (event) => {
        props.onClickButton(event)
        console.log(event.target.value)
    }
    const s = {
        color: props.style.button1 ? "red" : "black",
        border: props.style.button1 ?"4px dotted blue" : "1px"
    }
    const s1 = {
        color: props.style.button2 ? "red" : "black",
        border: props.style.button2 ?"4px dotted blue" : "1px"
    }
    const s2 = {
        color: props.style.button3 ? "red" : "black",
        border: props.style.button3 ?"4px dotted blue" : "1px"
    }
    const s3 = {
        color: props.style.button4 ? "red" : "black",
        border: props.style.button4 ?"4px dotted blue" : "1px"
    }
    const s4 = {
        color: props.style.button5 ? "red" : "black",
        border: props.style.button5 ?"4px dotted blue" : "1px"
    }

    return (
        <div>
            <div className="row" style={{marginTop:"120px"}}>
                <div className="col-3 mt-5">
                    <img src="./images/img3.jpeg" className="figure-img img-fluid rounded" width="100%" alt="charitableimage" />
                </div>
                <div className="col-8 mr-3" style={{marginTop:"50px"}}>
                    <h3 className="col px-3">A couple of quick questions before heading to your account…</h3>
                    <br />
                    <h4>What causes are important to you?</h4>
                    <p>Select causes to see charities and Giving Groups that might interest you. You’ll see them in the<strong>"discovered for you"</strong> section of your account.</p>
                    <h4 style={{marginTop:"20px"}}>Select as many as you like:</h4>
                    <button id="bt1" style={s} className="btn col-2 m-2 p-2" onClick={selectHandler} name="button1" value={props.style.button1}> Education</button>
                    <button id="bt2" style={s1} className="btn col-2 m-2 p-2" onClick={selectHandler} name="button2" value={props.style.button2}>Health</button>
                    <button id="bt3" style={s2} className="btn col-2 m-2 p-2" onClick={selectHandler} name="button3" value={props.style.button3}>Sports</button>
                    <button id="bt4" style={s3} className="btn col-2 m-2 p-2" onClick={selectHandler} name="button4" value={props.style.button4}>Club</button>
                    <button id="bt5" style={s4} className="btn col-2 m-2 p-2" onClick={selectHandler} name="button5" value={props.style.button5}>Others</button>
                    <p style={{fontSize:"10px"}}>Only you can see causes you care about unless you decide to share them on your personal profile. We don't share your selected causes with charities or anyone else.</p>
                    <div className="panel-footer row my-5" >
                        <div className="col-6">
                            <button className="btn btn-outline-primary" onClick={clickHandler}>back</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={submitHandler}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Questions;