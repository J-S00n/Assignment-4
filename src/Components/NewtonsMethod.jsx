import { useState } from "react";

function NewtonsMethod() {
    const [rootGuess, setRootGuess] = useState();
    const [approx, setApprox] = useState("Press Calculate");

    function newtonsMethod(event) {
        event.preventDefault();
        let g = parseFloat(rootGuess);
        let f = 6 * g ** 4 - 13 * g ** 3 - 18 * g ** 2 + 7 * g + 6;
        let fPrime = 24 * g ** 3 - 39 * g ** 2 - 36 * g + 7;
        let calculatedRoot = g - f / fPrime;

        while (Math.abs(calculatedRoot - g) > 0.0001) {
            g = calculatedRoot;
            f = 6 * g ** 4 - 13 * g ** 3 - 18 * g ** 2 + 7 * g + 6;
            fPrime = 24 * g ** 3 - 39 * g ** 2 - 36 * g + 7;
            calculatedRoot = g - f / fPrime;
        }

        setApprox(calculatedRoot.toFixed(6));
    }

    return (
        <div className="container newtons-method">
            <h1>Newton's Method</h1>
            <form id="newtons-method-form" onSubmit={(event) => { newtonsMethod(event) }}>
                <label htmlFor="root-guess">Root Guess:</label>
                <input type="number" id="root-guess" name="root-guess" value={rootGuess || ""} onChange={(event) => { setRootGuess(event.target.value) }} required />
                <label htmlFor="approx">Root Approximation (Result):</label>
                <input type="text" id="approx" name="approx" value={approx} readOnly />
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default NewtonsMethod;