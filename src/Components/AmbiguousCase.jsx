import { useState } from "react";

function AmbiguousCase() {
    const [sideA, setSideA] = useState();
    const [sideB, setSideB] = useState();
    const [angleA, setAngleA] = useState();
    const [result, setResult] = useState("Press Calculate");

    function ambiguousCaseFormula(event) {
        event.preventDefault();
        const h = sideB * Math.sin(angleA * Math.PI / 180);

        if (angleA < 0 || angleA > 180 || sideA < 0 || sideB < 0) {
            setResult("Invalid angle");
        }else if(angleA < 90) {
            if (sideA < h) {
                setResult("No triangle");
            } else if (Math.abs(sideA - h) < 0.0001) {
                setResult("Right triangle");
            } else if (sideA > sideB) {
                setResult("One triangle");
            } else if (sideA > h && sideA < sideB) {
                setResult("Two triangles (ambiguous)");
            }
        } else if (angleA > 90) {
            if (sideA < sideB || sideA === sideB) {
                setResult("No triangle");
            } else if (sideA > sideB) {
                setResult("One triangle");
            }
        } else {
            setResult("No triangle");
        }
    }

    return (
        <div className="container ambiguous-case">
            <h1>Ambiguous Case</h1>
            <form id="amb-case" onSubmit={(event) => { ambiguousCaseFormula(event) }}>
                <label htmlFor="angle-a">Angle A:</label>
                <input type="number" id="angle-a" name="angle-a" value={angleA || ""} onChange={(event) => { setAngleA(Number(event.target.value)) }} required />
                <label htmlFor="amb-case-side-a">Side A:</label>
                <input type="number" id="amb-case-side-a" name="amb-case-side-a" value={sideA || ""} onChange={(event) => { setSideA(Number(event.target.value)) }} required />
                <label htmlFor="amb-case-side-b">Side B:</label>
                <input type="number" id="amb-case-side-b" name="amb-case-side-b" value={sideB|| ""} onChange={(event) => { setSideB(Number(event.target.value)) }} required />
                <label htmlFor="result">Triangle Type (Result):</label>
                <input type="text" id="result" name="result" value={result} readOnly />
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default AmbiguousCase;

