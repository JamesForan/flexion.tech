let root = document.documentElement;
let valid = true;
var range = document.querySelectorAll(".dim_input");

var fLength = document.getElementById("length");
var fWidth = document.getElementById("width");
var fHeight = document.getElementById("height");
var fWeight = document.getElementById("weight");
var fCube = document.querySelector(".cube");
var dWeight = document.querySelector(".dim-weight")
var scaleWeight = document.querySelector(".weight-icon")
var dimFactor;

var size = 300;


range.forEach((e) => {
  e.oninput = inputsUpdated;
  // e.nextElementSibling.innerHTML = e.value;
});
updateCube();

function inputsUpdated(e) {
	if((fLength.validationMessage.length > 0)||(fWidth.validationMessage.length > 0)||(fHeight.validationMessage.length > 0)){
		valid = false;
	} else {
		valid = true;
		updateCube();
	}
	
	
  // e.target.nextElementSibling.innerHTML = e.target.value;
  
}

function updateCube() {
	if(valid) {
		dimFactor = document.querySelector('input[name="factor"]:checked').value;
		let viewFactor = 1;
		let maxDim = Math.max(fWidth.value,fHeight.value,fLength.value);
		console.log(`maxDim=:${maxDim}`);
		console.log(`size=:${size}`);
		viewFactor = size/maxDim;
		// if (maxDim > size) {
		// 	viewFactor = size/maxDim;
		// } else {
		// 	viewFactor = maxDim/size;
		// }
		// console.log(viewFactor);
		root.style.setProperty('--width',fWidth.value * viewFactor + "px");
		root.style.setProperty('--height',fHeight.value * viewFactor + "px");
		root.style.setProperty('--length',fLength.value * viewFactor + "px");
		// root.style.setProperty('--perspective',viewFactor*100 + "em");
		let a = (Math.round((fWidth.value * fHeight.value * fLength.value)/dimFactor * 100)  / 100);
		dWeight.innerText = a;
		scaleWeight.innerText = fWeight.value;
		if (a > fWeight.value){
			document.querySelector(".balanced-view").classList.add("dim")
			dWeight.style.width = "35%"
			scaleWeight.style.width = "25%"
		} else if (a == fWeight.value){
			document.querySelector(".balanced-view").classList.add("same")
			dWeight.style.width = "25%"
			scaleWeight.style.width = "25%"
		}
			else {
			document.querySelector(".balanced-view").classList.remove("dim")
			dWeight.style.width = "25%"
			scaleWeight.style.width = "35%"
		}
			
	}
  // fCube.style.width = fWidth.value * viewFactor + "px";
  // fCube.style.height = fHeight.value * viewFactor + "px";
}

