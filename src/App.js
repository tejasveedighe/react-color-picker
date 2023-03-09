import { hsvaToHex } from "@uiw/color-convert";
import Swatch from "@uiw/react-color-swatch";
import { useState } from "react";
import "./App.css";

function App() {
	const [hex, setHex] = useState("#fff");
	return (
		<div style={{ backgroundColor: hex }}>
			<div style={{ backgroundColor: "white" }}>
				<Swatch
					colors={["#F44E3B", "#FE9200", "#FCDC00", "#DBDF00"]}
					color={hex}
					onChange={(hsvColor) => {
						setHex(hsvaToHex(hsvColor));
					}}
				/>
			</div>
			{hex}
		</div>
	);
}

export default App;
