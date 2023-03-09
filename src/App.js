import "./App.css";
import { SwatchesPicker } from "react-color";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("#fff");
	const [show, setShow] = useState(false);
	return (
		<div className="App">
			<button style={{ backgroundColor: color }} onClick={() => setShow(!show)}>
				Show
			</button>
			{show && (
				<SwatchesPicker
					onChange={(color) => {
						setColor(color.hex);
					}}
				/>
			)}
			<br />
			{color}
		</div>
	);
}

export default App;
