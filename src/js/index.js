//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/SecondsCounter";

let startingTime = Date.now();

setInterval(() => {
	let currentTime = Date.now();
	let seconds = Math.floor((currentTime - startingTime) / 1000);
	ReactDOM.render(
		<SecondsCounter seconds={seconds} />,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
