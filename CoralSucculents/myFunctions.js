var nextImage = new Array();
var curr, img, display;
nextImage[0] = "Image1.jpg";
nextImage[1] = "Image2.jpg";
nextImage[2] = "Image3.jpg";
nextImage[3] = "Image4.jpg";
nextImage[4] = "Image5.jpg";
nextImage[5] = "Image6.jpg";
nextImage[6] = "Image7.jpg";
nextImage[7] = "Image8.jpg";
curr = 0;
setTimeout("displayImages()", 2000);


function displayImages(){
	document.getElementById("imgContainer").src = nextImage[curr];
	document.write("displayed images should be here " + curr);
	curr++;
	if(curr == nextImage.length){
		curr = 0;
	}
}
function searchFunction(){
	
}