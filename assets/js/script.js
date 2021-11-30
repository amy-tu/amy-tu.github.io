
/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
 function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove("hidden"); 

}



function unhideLightbox1() {
	document.getElementById("pic1").style.display = unhideLightbox("pic1")
}

document.getElementById("picture-1").onclick = unhideLightbox1;


function unhideLightbox2() {
	document.getElementById("pic2").style.display = unhideLightbox("pic2")
}
document.getElementById("picture-2").onclick = unhideLightbox2;



function unhideLightbox3() {
	document.getElementById("pic3").style.display = unhideLightbox("pic3")
}
document.getElementById("picture-3").onclick = unhideLightbox3;

function unhideLightbox4() {
	document.getElementById("pic4").style.display = unhideLightbox("pic4")
}
document.getElementById("picture-4").onclick = unhideLightbox4;

function unhideLightbox5() {
	document.getElementById("pic5").style.display = unhideLightbox("pic5")
}
document.getElementById("picture-5").onclick = unhideLightbox5;

function unhideLightbox6() {
	document.getElementById("pic6").style.display = unhideLightbox("pic6")
}
document.getElementById("picture-6").onclick = unhideLightbox6;

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById('pic1').classList.add('hidden');
	document.getElementById('pic2').classList.add('hidden');
	document.getElementById('pic3').classList.add('hidden');
	document.getElementById('pic4').classList.add('hidden');
	document.getElementById('pic5').classList.add('hidden');
	document.getElementById('pic6').classList.add('hidden');
}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes