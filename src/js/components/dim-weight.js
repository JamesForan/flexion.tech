let root = document.documentElement;
let valid = true;
var range = document.querySelectorAll(".dim_input");

var fLength = document.getElementById("length");
var fWidth = document.getElementById("width");
var fHeight = document.getElementById("height");
var fWeight = document.getElementById("weight");
var fCube = document.querySelector(".cube");
var dWeight = document.querySelector(".dim-weight")
var calcsVolume = document.querySelector(".calcs__volume")
var calcsVolRes = document.querySelector(".calcs__v-res")
var calcsDimWeight = document.querySelector(".calcs__dim-weight")
var calcsDimRes = document.querySelector(".calcs__dim-res")
var calcsBilling = document.querySelector(".calcs__billing")
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
		document.querySelector("section.selected").classList.add('visually-hidden')
		document.querySelectorAll(".selected").forEach((e) => e.classList.remove('selected'))
		document.querySelectorAll(`.factor__${factorSlider.value}`).forEach((e) => e.classList.add('selected'))
		document.querySelector("section.selected").classList.remove('visually-hidden')
		let viewFactor = 1;
		let maxDim = Math.max(fWidth.value,fHeight.value,fLength.value);
		viewFactor = size/maxDim;
		root.style.setProperty('--width',fWidth.value * viewFactor + "px");
		root.style.setProperty('--height',fHeight.value * viewFactor + "px");
		root.style.setProperty('--length',fLength.value * viewFactor + "px");
		// root.style.setProperty('--perspective',viewFactor*100 + "em");
		let volume = fWidth.value * fHeight.value * fLength.value;
		let dimW = Math.round((volume)/dimFactor);
		dWeight.innerText = dimW
		let actW = Math.round(fWeight.value)
		scaleWeight.innerText = actW
		//set the size to character width +2 + how far are we away from the next character...
	
		let dimWl = ((""+dimW).length+2) + Math.round(dimW/(dimW.toString().replace(/[0-9]/g,"9"))*100)/100
		let actWl = ((""+actW).length+2) + Math.round(actW/(actW.toString().replace(/[0-9]/g,"9"))*100)/100
	
		root.style.setProperty('--dimW-icon-size',((dimWl)) + "ch" )
		root.style.setProperty('--weight-icon-size',((actWl)) + "ch")
		
		calcsVolume.innerText = `${fWidth.value}*${fLength.value}*${fHeight.value}`
		calcsVolRes.innerText =  volume
		calcsDimWeight.innerText = `${volume}/${dimFactor}`
		calcsDimRes.innerText = dimW
		calcsBilling.innerText = actW
		document.querySelector(".balanced-view").classList.remove("dim")
		document.querySelector(".balanced-view").classList.remove("same")
		if (dimW > actW) {
			calcsBilling.innerText = dimW
			document.querySelector(".balanced-view").classList.add("dim")
		} else if (Math.round(dimW) == Math.round(actW)){
			document.querySelector(".balanced-view").classList.add("same")
		}
	}
}

