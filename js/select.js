
function selectCO(n) {

	const selectOpen = document.getElementsByClassName('select-open')[n];
	if (selectOpen.style.display == "none") {
		selectOpen.style.display = "flex";
	} else {
		selectOpen.style.display = "none";
	}
}
