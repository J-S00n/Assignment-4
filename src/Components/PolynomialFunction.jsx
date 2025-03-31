import { useState } from "react";

function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState();
    const [exponents, setExponents] = useState();
    const [xValue, setXValue] = useState();
    const [result1, setResult1] = useState("Press Calculate");
    const [result2, setResult2] = useState("Press Calculate");

    function polynomialFunction(event) {
        event.preventDefault();
        let parsedCoefficients = coefficients.split(' ').map(Number);
        let parsedExponents = exponents.split(' ').map(Number);
        let polyFunction = [];
        let functionValue = [];
        let evaluation = 0;

        for (let i = 0; i < parsedCoefficients.length; i++) {
            polyFunction.push(parsedCoefficients[i] + "x ^ " + parsedExponents[i]);
        }

        for (let i = 0; i < parsedCoefficients.length; i++) {
            functionValue.push(parsedCoefficients[i] * xValue ** parsedExponents[i]);
            evaluation += functionValue[i];
        }
        setResult1("f(x) = " + polyFunction.join(" + "));
        setResult2("f(" + xValue + ") = " + evaluation);
    }

    return (
        <div className="container polynomial-function">
            <h1>Polynomial Function</h1>
            <form id="poly-func" onSubmit={(event) => { polynomialFunction(event) }}>
                <label htmlFor="coefficients">Coefficients:</label>
                <input type="text" id="coefficients" name="coefficients" value={coefficients} onChange={(event) => { setCoefficients(event.target.value) }} required />
                <label htmlFor="exponents">Exponents:</label>
                <input type="text" id="exponents" name="exponents" value={exponents} onChange={(event) => { setExponents(event.target.value) }} required />
                <label htmlFor="x-value">x Value:</label>
                <input type="number" id="x-value" name="x-value" value={xValue || ""} onChange={(event) => { setXValue(event.target.value) }} required />
                <label htmlFor="result-1">Polynomial Function (Result):</label>
                <input type="text" id="result-1" name="result-1" value={result1} readOnly />
                <label htmlFor="result-2">Polynomial Evaluation (Result):</label>
                <input type="text" id="result-2" name="result-2" value={result2} readOnly />
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default PolynomialFunction;