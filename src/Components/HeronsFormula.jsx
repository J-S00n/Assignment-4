import { useState } from 'react';

function HeronsFormula() {
    const [sideA, setSideA] = useState();
    const [sideB, setSideB] = useState();
    const [sideC, setSideC] = useState();
    const [result, setResult] = useState('Press Calculate');

    function heronsFormula(event) {
        event.preventDefault();
        const area = 1 / 4 * Math.sqrt(4 * sideA ** 2 * sideB ** 2 - (sideA ** 2 + sideB ** 2 - sideC ** 2) ** 2);
        setResult(area);
    }

    return (
        <div className="container herons-formula">
            <h1>Heron's Formula</h1>
            <form id="herons-formula" onSubmit={(event) => { heronsFormula(event) }}>
                <label htmlFor="herons-side-a">Side A:</label>
                <input type="number" id="herons-side-a" name="herons-side-a" value={sideA || ""} onChange={(event) => { setSideA(Number(event.target.value)) }} required />
                <label htmlFor="herons-side-b">Side B:</label>
                <input type="number" id="herons-side-b" name="herons-side-b" value={sideB || ""} onChange={(event) => { setSideB(Number(event.target.value)) }} required />
                <label htmlFor="herons-side-c">Side C:</label>
                <input type="number" id="herons-side-c" name="herons-side-c" value={sideC || ""} onChange={(event) => { setSideC(Number(event.target.value)) }} required />
                <label htmlFor="result">Area:</label>
                <input type="text" id="result" name="result" value={result} readOnly />
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default HeronsFormula;