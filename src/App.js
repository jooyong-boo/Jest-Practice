import { useState } from "react";
import "./App.css";

export const replaceColorName = (color) => {
    return color.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
    const [check, setCheck] = useState(false);

    return (
        <div>
            <button
                style={{ backgroundColor: check ? "grey" : buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={check}
            >
                Change to {newButtonColor}
            </button>
            <input
                type="checkbox"
                id="disable-button-checkbox"
                defaultChecked={check}
                onClick={(e) => setCheck(e.target.checked)}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    );
}

export default App;
