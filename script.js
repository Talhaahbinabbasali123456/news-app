
let backGroundArray = ["img/day-time.jpeg", "img/1.png", "img/news.jpg", "img/programming.png", "img/fitness.jpg", "img/animal.PNG", "img/Fre.jpg", "img/background-2.png", "img/rain.jpg"]

function onloadfunc() {
	document.querySelector(".tech-img").style["background-image"] = `url(${backGroundArray[3]})`;
	document.querySelector(".animal-img").style["background-image"] = `url(${backGroundArray[5]})`;
	document.querySelector(".sports-img").style["background-image"] = `url(${backGroundArray[1]})`;
	document.querySelector(".weather-img").style["background-image"] = `url(${backGroundArray[0]})`;
	document.querySelector(".fitness-img").style["background-image"] = `url(${backGroundArray[4]})`;
	document.querySelector(".politics-img").style["background-image"] = `url(${backGroundArray[2]})`;
	document.querySelector(".top-headline-img").style["background-image"] = `url(${backGroundArray[6]})`;
	document.querySelector(".cooking-img").style["background-image"] = `url(${backGroundArray[7]})`;
	document.querySelector(".showbiz-img").style["background-image"] = `url(${backGroundArray[8]})`;
}

function backButton() {
	document.querySelector(".absolute-section").style.display = "none";
	document.querySelector(".back-button").style.display = "none";
	window.location.replace("index.html");
}
function topHeadline() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })

}
function showbiz() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function technology() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function animalPLanet() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function politics() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=news24&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function sports() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function weather() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function cooking() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=die-zeit&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}
function fitness() {
	document.querySelector(".absolute-section").style.display = "block";
	document.querySelector(".absolute-section").style["z-index"] = "1";
	document.querySelector(".back-button").style.display = "flex";

	$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=63430dfe88784548827757ee5af53812",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".absolute-section").innerHTML += 
		`<div class='loop-generate-div'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>;
		</div>`;
	}
	
}
 })
}

































// let arrayOfNavList =
// 	 ["Top headline",	
// 	"Showbiz",
// 	"Weather", 
// 	"Games", 
// 	"Media",
// 	"Politics", 
// 	"Social", 	
// 	"Animal Planet", 
// 	"Hollywood", 
// 	"Sports"];

// let dummiText = "khkask gfjkasghjk gsfasfuisdtfa igfasfgtasuity asigfagfuiasy guasghdlsgdgh gdhsgsdhigh";
// let dummiTime = "‎‎12:00 PM 26 August ‎2018";


// function create() {
// 	for (var i = 0; i < 10; i++) {
// 		document.querySelector(".main-nav").innerHTML += `<span class='nav-item'>${arrayOfNavList[i]}</span>`
// 	}
// 	for (var i = 0; i < 10; i++) {
// 		document.querySelector(".main-content").innerHTML += 
// 		`<div class='news-container'>
// 			<div class='image-div'></div>
// 		 	<div class='headline-div'>
// 		 		<p class='news-text'>${dummiText}</p>
// 		 		<span class='news-time'>${dummiTime}</span>
// 		 	</div>
// 		 </div>`
// 	}
// }
// function callback() {
// 	let random = parseInt(Math.random()*100+80);
// 	document.querySelector(".main-nav").style.transition = 3+"s";
// 	document.querySelector(".main-haader").style.transition = 3+"s";
//       document.querySelector(".main-footer").style.transition = 3+"s";
// 	document.querySelector(".main-nav").style["background-size"] = random*2 + "%";
// 	document.querySelector(".main-haader").style["background-size"] = random*2 + "%";
//       document.querySelector(".main-footer").style["background-size"] = random*2 + "%";

// } 
// setInterval(callback, 5000);