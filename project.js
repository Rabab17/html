
var imageArray= ["vodafon (1).jpg","thanks.png", "Hero-Mobile-Moneyback.jpg", ];
var x = document.getElementById("vodafon");
var imageIndex = 0;
var  y;
function slide(){
y = setInterval(function() {
imageIndex++;
if (imageIndex == imageArray.length) {
imageIndex = 0;
}
x.setAttribute("src", imageArray[imageIndex]);
}, 2000);}
slide();
