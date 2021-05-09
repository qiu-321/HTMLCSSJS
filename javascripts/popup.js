function popup(){
	const body = document.querySelector("body");
	const popupBackground = document.getElementsByClassName("popupBackground");
	
	function hidePopup(){
	    body.addEventListener("click", () => {
	        popupBackground[0].style.display = "none";
	    }, false);
	}
	hidePopup();
}