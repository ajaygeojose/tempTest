import '../balbhas.css';
import React, { useState, useEffect } from "react";


const Balbhas = () => {
    const [amount, setAmount] = useState('');
    const [earnings,setEarnings] = useState('');
    const [fees,setFees] = useState('');

    const updateTextInput = (e) => {
        console.log(`clicked range --> ${e.target.value}`);
        document.getElementById('textInput').value = e.target.value;
        setAmount(e.target.value);

        let ern = (e.target.value * 1.16)/100;
        setEarnings(ern);

        let fee = (amount*0.0116);
        setFees(fee);
    }


    return (
        <div>
            <div className="header">
                <h1>Lending Made Easy</h1>
                <p>Earn up to -1.16%* a year accross a wide range of P2P siteswithInvestUP</p>
                <br />
                <button className="favorite styled"
                    type="button">
                    GET STARTED
                </button>
            </div>

            <div className='footer'>
                <p>With <span className="amt1">&#163;<input type="number" className="amt1" onChange={updateTextInput} placeholder="amount" /></span> your estimated earnings colud be <span className="amt2">&#163;<input type="text" className="amt2" value={earnings} disabled/></span>  *per year with fees of just <span className="amt3">&#163;<input type="number" className="amt3" value={fees} disabled /></span> per year</p>
            </div>
            <div className='footer'>
                <input className="footerRange" type="range" id="rangeInput" name="rangeInput" min="500" max="250000" onChange={updateTextInput} />
                <span className="amt">&#163;</span><input className="amt" type="text" id="textInput" />
            </div>
        </div>
    );
}

export default Balbhas;
