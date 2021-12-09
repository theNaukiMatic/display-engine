import React, { useEffect, useState } from "react";
import {
	FPS,
	PIXEL_OFF,
	PIXEL_ON,
	PIXEL_SIZE,
	SCREEN_HEIGHT,
	SCREEN_WIDTH,
} from "./config";
import { drawCircle, drawRectFilled } from "./draw";

export default function Window() {
	const [windowMatrix, setWindowMatrix] = useState([]);
	const [clock, setClock] = useState(0);
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
		return tempWindow;
	}

	//intital setup
	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		blankWindow = getBlankScreen();
		setWindowMatrix(blankWindow);
	}, []);

	//clock
	useEffect(() => {
		setTimeout(function () {
			setClock(clock + 1);
		}, 1000 / FPS);
		// setClock(clock + 1);
	}, [clock]);

	//test animation
	useEffect(() => {
		if (windowMatrix.length) {
			const nextWindow = windowMatrix;
			nextWindow[clock % SCREEN_HEIGHT][clock % SCREEN_WIDTH] = 1;
			setWindowMatrix(nextWindow);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clock]);

	//test drawing
	useEffect(() => {
		if (windowMatrix.length) {
			drawRectFilled(windowMatrix, setWindowMatrix, 40, 5, 10, 50);
			drawRectFilled(windowMatrix, setWindowMatrix, 100, 20, 10, 50);
			drawCircle(windowMatrix, setWindowMatrix, 100, 20, 10);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowMatrix]);

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
					backgroundColor: PIXEL_ON,
					borderRadius: "50%",
				}}
			></div>
		);
	} else {
		return (
			<div
				style={{
					width: PIXEL_SIZE,
					height: PIXEL_SIZE,
					backgroundColor: PIXEL_OFF,
					borderRadius: "50%",
				}}
			></div>
		);
	}
}
