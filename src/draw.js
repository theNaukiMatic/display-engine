import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./config";

function setPixel(window, x, y, state) {
	const x1 = Math.round(x);
	const y1 = Math.round(y);
	const newWindow = window;
	if (x1 < SCREEN_WIDTH && y1 < SCREEN_HEIGHT && x1 >= 0 && y1 >= 0) {
		newWindow[y1][x1] = state;
	}
	return newWindow;
}

export function drawRectFilled(window, setWindow, x, y, width, height) {
	let newWindow = window;
	for (let i = 0; i < height; i++) {
		if (i + y >= SCREEN_HEIGHT) break;
		for (let j = 0; j < width; j++) {
			if (j + x >= SCREEN_WIDTH) break;

			newWindow[y + i][x + j] = 1;
		}
	}
	setWindow(newWindow);
}
export function drawCircle(window, setWindow, x, y, r) {
	let i, angle, x1, y1;
	let newWindow = window;
	for (i = 0; i < 360; i += 0.1) {
		angle = i;
		x1 = r * Math.cos((angle * Math.PI) / 180);
		y1 = r * Math.sin((angle * Math.PI) / 180);
		newWindow = setPixel(newWindow, x + x1, y + y1, 1);
	}
	setWindow(newWindow);
}
