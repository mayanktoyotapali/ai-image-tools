function convertImage(){

let file = document.getElementById("imageInput").files[0];

let reader = new FileReader();

reader.onload = function(e){

let img = new Image();

img.onload = function(){

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

let png = canvas.toDataURL("image/png");

let link = document.getElementById("downloadLink");
link.href = png;
link.download = "converted.png";
link.innerText = "Download PNG";

}

img.src = e.target.result;

}

reader.readAsDataURL(file);

}
