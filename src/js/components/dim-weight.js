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
var UOMLength = document.querySelectorAll(".UOM__length")
var UOMWeight = document.querySelectorAll(".UOM__weight")
var dimFactor = factorSlider.value;
var UOMClass = document.querySelector('input[name="unitClass"]:checked').value;
const conversionTable = {
	cmTOinch:0.393701, 
	inchTOcm:2.54,
	kgTOlb:2.20462,
	lbTOkg:0.453592,
	3000:20.8,
	4000:110,
	5000:139,
	6000:166,
	7000:194,
	8000:221,
	9000:250
}


//size of the view port for the Hyperrectangle
var size = 300;
//metric by default
UOMLength.forEach((e) => e.innerHTML = "cm")
UOMWeight.forEach((e) => e.innerHTML = "kg")
range.forEach((e) => {
  e.oninput = inputsUpdated;
  // e.nextElementSibling.innerHTML = e.value;
});
updateCube();
    
window.addEventListener("scroll", function() {
	fCube.style.transform = "rotateX(-15deg) rotateY("+window.pageYOffset/5+"deg)";
});

function inputsUpdated(e) {
	let prevUOMClass = UOMClass
	UOMClass = UOMClass = document.querySelector('input[name="unitClass"]:checked').value
	if(UOMClass != prevUOMClass) {
		// debugger
		if(UOMClass == "metric"){
			fLength.value = Math.round(fLength.value*conversionTable.inchTOcm)
			fWidth.value = Math.round(fWidth.value*conversionTable.inchTOcm)
			fHeight.value = Math.round(fHeight.value*conversionTable.inchTOcm)
			fWeight.value = Math.round(fWeight.value*conversionTable.lbTOkg)
			UOMLength.forEach((e) => e.innerHTML = "cm")
			UOMWeight.forEach((e) => e.innerHTML = "kg")
		} else {
			fLength.value = Math.round(fLength.value*conversionTable.cmTOinch)
			fWidth.value = Math.round(fWidth.value*conversionTable.cmTOinch)
			fHeight.value = Math.round(fHeight.value*conversionTable.cmTOinch)
			fWeight.value = Math.round(fWeight.value*conversionTable.kgTOlb)
			UOMLength.forEach((e) => e.innerHTML = "in")
			UOMWeight.forEach((e) => e.innerHTML = "lb")

		}
	}
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
		if(UOMClass=="imperial"){
			dimFactor = conversionTable?.[dimFactor]
		}
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

