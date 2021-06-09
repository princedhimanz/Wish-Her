this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Funny, smart, silly, cute, pretty, and fantastic. Leena, You truly are a girl who is beautiful inside out. On your birthday today, I just want you to know how lucky I am to have you in my life, happy birthday to you! Every person God brings into our lives holds a special place in our hearts, some for a few years some for many years, and some for their lifetime and most of ours. I wish I could take back the hard times that you had to suffer, but I can't. Meri Bandri, I just need you to know that I'll be there for you no matter what.";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
