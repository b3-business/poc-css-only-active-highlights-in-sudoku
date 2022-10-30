// Import stylesheets
import "./style.css";
import { generateGrid } from "./functions/generate";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

appDiv.appendChild(generateGrid(81, 9));
