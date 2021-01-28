import React, { useState } from "react";

//create your first component
export function Home() {
	let [state, setState] = useState(null);

	let redSelected = "";
	if (state === "bg-danger") redSelected = "selected";
	let yellowSelected = "";
	if (state === "bg-warning") yellowSelected = "selected";
	let greenSelected = "";
	if (state === "bg-success") greenSelected = "selected";

	return (
		<div className="container bg-dark mt-3 p-3">
			<div
				className={"light bg-danger " + redSelected}
				onClick={() => setState("bg-danger")}
			/>
			<div
				className={"light bg-warning " + yellowSelected}
				onClick={() => setState("bg-warning")}
			/>
			<div
				className={"light bg-success " + greenSelected}
				onClick={() => setState("bg-success")}
			/>
		</div>
	);
}
