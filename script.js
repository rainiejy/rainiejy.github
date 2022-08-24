/* .js files add interaction to your website */
var factList = [
  "Nearly 25 percent of collegiate athletes have reported clinically relevant levels of depressive symptoms",
	"“For the longest time, I thought asking for help was a sign of weakness because that’s kind of what society teaches us. That’s especially true from an athlete’s perspective. If we ask for help, then we’re not this big macho athlete that people can look up to. Well, you know what? If someone wants to call me weak for asking for help, that’s their problem. Because I’m saving my own life.” - Michael Phelps, US Olympic Swimmer",
  "Many student-athletes report higher levels of negative emotional states than non-student-athlete adolescents",
	"“Know that you’re not alone, there are millions of people across the nation and the world who are experiencing the same things that you are.” - Amanda Beard, US Olympic Swimmer",
  "More than 30% of athletes report symptoms of depression", 
	"“Everyone is going through something that we can’t see. The thing is, because we can’t see it, we don’t know who’s going through what and we don’t know when and we don’t always know why. Mental health is an invisible thing, but it touches all of us at some point or another. It’s part of life.” - Kevin Love, NBA Player"];


var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
	factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn")

if (scriptBtn) {
	scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
	var name = document.getElementById("name").value;
	var type = document.getElementById("type").value;
	var feedback = document.getElementById("feedback").value;

	displayScript.innerHTML = "Thank you " + name + " for sharing your " + type + "! We really appreciate hearing your thoughts on this issue. Please don't hesitate to reach out!";
}
