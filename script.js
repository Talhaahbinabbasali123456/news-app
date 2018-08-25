function call() {

// let background = ["images/1.jpg"];
// let random = parseInt(Math.random()*1);
// 	document.querySelector(".logo-div").style["background-image"] = `url(${background[random]})`;

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
	for (let i=0; i<10; i++) {

	document.querySelector(".article-content").innerHTML += `<div class='catagories'>${catogoriesName[i]}</div>`
	
	}
	for (let i=0; i<20; i++) {

	document.querySelector(".article-content-2").innerHTML += `<div class='news'></div>`
	
	}

}
