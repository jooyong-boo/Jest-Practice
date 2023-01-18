import { useState } from "react";
import "./App.css";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
    const [check, setCheck] = useState(false);

    return (
        <div>
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={check}
            >
                Change to {newButtonColor}
            </button>
            <input
                type="checkbox"
                defaultChecked={check}
                onClick={(e) => setCheck(e.target.checked)}
            />
        </div>
    );
}

export default App;
