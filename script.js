


let arrayOfNavList =
	 ["Top headline",	
	"Showbiz",
	"Weather", 
	"Games", 
	"Media",
	"Politics", 
	"Social", 	
	"Animal Planet", 
	"Hollywood", 
	"Sports"];

let dummiText = "khkask gfjkasghjk gsfasfuisdtfa igfasfgtasuity asigfagfuiasy guasghdlsgdgh gdhsgsdhigh";
let dummiTime = "‎‎12:00 PM 26 August ‎2018";


function create() {


$.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=bild&apiKey=ff3f343e7f1448b29ed977f68f7f2c0f",
	success: function(data){
		console.log(data)

	for (var i = 0; i < 10; i++) {
		document.querySelector(".main-content").innerHTML += 
		`<div class='news-container'>
			<img class='image-div' src='${data.articles[i].urlToImage}'>

		 	<div class='headline-div'>
		 		<p class='news-text'>${data.articles[i].description}</p>
		 		<span class='news-time'>${data.articles[i].publishedAt}</span>
		 	</div>
		 </div>`
	}
	
}
 })



	for (var i = 0; i < 10; i++) {
		document.querySelector(".main-nav").innerHTML += `<span class='nav-item'>${arrayOfNavList[i]}</span>`
	}
}



function callback() {
	let random = parseInt(Math.random()*100+80);
	document.querySelector(".main-nav").style.transition = 3+"s";
	document.querySelector(".main-haader").style.transition = 3+"s";
      document.querySelector(".main-footer").style.transition = 3+"s";
	document.querySelector(".main-nav").style["background-size"] = random*2 + "%";
	document.querySelector(".main-haader").style["background-size"] = random*2 + "%";
      document.querySelector(".main-footer").style["background-size"] = random*2 + "%";
  
} 
setInterval(callback, 5000);