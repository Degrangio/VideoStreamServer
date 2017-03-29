console.log("Enter StreamVideo.js");
let button = document.getElementById("streamVideo");
button.addEventListener("click", () => {
		console.log("callback called, here you would make a remote call to the server " +
				"then the server would listen for this call and download the appropriate video");

		let newDiv = document.createElement("div");
		let text = "ideally the client would listen to the server and create a video node here " +
		"but since we don't have the frontend set up yet, this is just a placeholder";
		newDiv.appendChild(document.createTextNode(text));
		document.body.insertBefore(newDiv, button.nextSibling);
});