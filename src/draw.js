import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./config";

export function drawRect(window, setWindow, x, y, width, height) {
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
