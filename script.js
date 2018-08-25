function call() {


let backgroundT = ["images/4.jpg", "images/news.png", "images/Fre.jpg"];
let randomT = parseInt(Math.random()*3);
	document.querySelector(".header-layout").style["background-image"] = `url(${backgroundT[randomT]})`;

let backgrounds = ["images/2.jpg", "images/3.jpg", "images/4.jpg"];
let randoms = parseInt(Math.random()*3);
	document.querySelector(".main-article-layout").style["background-image"] = `url(${backgrounds[randoms]})`;

}
setInterval(call,3000);








let catogoriesName = ["Top Headlines", "Politics", "Sports", "Showbiz", "Weather", "Animal planet", "Technology", "Internet", "Cooking", "Fitness"];


function inicialize() {
$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=8c8793ffe9c046b6a6c2b3f7313f5e3a",
	success: function(data){
		console.log(data)

	for(let i=0; i<8; i++){
	document.querySelector(".article-content-2").innerHTML += `<div class='news'>
	<img  class="img" src="${data.articles[i].urlToImage}">
	<h1 class='desc'>${data.articles[i].description}<span class='date'>${data.articles[i].publishedAt}</span></h1>
	
	<br>
	
	</div>`
	}
}
 })
 for(let i=0; i<8; i++){
	// console.log("lanti")
document.querySelector(".article-content").innerHTML += `<div class='catagories'>${catogoriesName[i]}</div>`
}
}