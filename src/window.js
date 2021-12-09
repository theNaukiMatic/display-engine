import React, { useEffect, useState } from "react";
import { PIXEL_SIZE, SCREEN_HEIGHT, SCREEN_WIDTH } from "./config";

export default function Window() {
	const [windowMatrix, setWindowMatrix] = useState([]);
	let blankWindow = [];

	//returns a blank window
	function getBlankScreen() {
		let temp = [];
		let tempWindow = [];
		for (let j = 0; j < SCREEN_HEIGHT; j++) {
			for (let i = 0; i < SCREEN_WIDTH; i++) {
				temp.push(0);
			}
			tempWindow.push(temp);
			temp = [];
		}
		tempWindow[0][4] = 1;
		tempWindow[1][4] = 1;
		tempWindow[2][4] = 1;
		tempWindow[3][4] = 1;
		return tempWindow;
	}

	//intital setup
	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		blankWindow = getBlankScreen();
		setWindowMatrix(blankWindow);
	}, []);
	return (
		<>
			{windowMatrix.map((windowArr) => (
				<div style={{ display: "flex" }}>
					{" "}
					{windowArr.map((pixel) => (
						<Pixel state={pixel} />
					))}
				</div>
			))}
		</>
	);
}

function Pixel({ state }) {
	if (state === 1) {
		return (
			<div
				style={{
					width: PIXEL_SIZE,
					height: PIXEL_SIZE,
					backgroundColor: "white",
				}}
			></div>
		);
	} else {
		return (
			<div
				style={{
					width: PIXEL_SIZE,
					height: PIXEL_SIZE,
					backgroundColor: "#202733",
				}}
			></div>
		);
	}
}
