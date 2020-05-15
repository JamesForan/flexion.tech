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
var factorSlider = document.getElementById("factors")
var dimFactor = factorSlider.value;

var size = 300;

range.forEach((e) => {
  e.oninput = inputsUpdated;
  // e.nextElementSibling.innerHTML = e.value;
});
updateCube();
    
window.addEventListener("scroll", function() {
	fCube.style.transform = "rotateX(-15deg) rotateY("+window.pageYOffset/5+"deg)";
});

function inputsUpdated(e) {
	if((fLength.validationMessage.length > 0)||(fWidth.validationMessage.length > 0)||(fHeight.validationMessage.length > 0)||fWeight.validationMessage.length > 0 ){
		valid = false;
	} else {
		valid = true;
		updateCube();
	}
}
function updateCube() {
	if(valid) {
		// dimFactor = document.querySelector('input[name="factor"]:checked').value;
		dimFactor = factorSlider.value;
		let viewFactor = 1;
		let maxDim = Math.max(fWidth.value,fHeight.value,fLength.value);
		viewFactor = size/maxDim;
		root.style.setProperty('--width',fWidth.value * viewFactor + "px");
		root.style.setProperty('--height',fHeight.value * viewFactor + "px");
		root.style.setProperty('--length',fLength.value * viewFactor + "px");
		// root.style.setProperty('--perspective',viewFactor*100 + "em");
		let dimW = Math.round((fWidth.value * fHeight.value * fLength.value)/dimFactor);
		dWeight.innerText = dimW
		let actW = Math.round(fWeight.value)
		scaleWeight.innerText = actW
		//set the size to character width +2 + how far are we away from the next character...
		let dimWl = ((""+dimW).length+2) + Math.round(dimW/(dimW.toString().replace(/[0-9]/g,"9"))*100)/100
		let actWl = ((""+actW).length+2) + Math.round(actW/(actW.toString().replace(/[0-9]/g,"9"))*100)/100
		// dWeight.style.width = dimWl+"ch"
		// scaleWeight.style.width = actWl+"ch"
		// let dimWFirst = dimW.toString().charAt(0)
		// let bFirst = b.toString().charAt(0)
		// console.log((a.length+2)+"ch")
		// debugger
		root.style.setProperty('--dimW-icon-size',((dimWl)) + "ch" )
		root.style.setProperty('--weight-icon-size',((actWl)) + "ch")
		// dWeight.style.height = (a.toString().charAt(0))
		
		if (dimW > actW) {
			document.querySelector(".balanced-view").classList.add("dim")
		} else if (dimW < actW){
			document.querySelector(".balanced-view").classList.remove("dim")
		}		
	}
}

