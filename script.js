function likedDefinition(alert){
    console.log(alert);
}

var numClicks = 0;
function likeStatus1() {
var likesElement = document.getElementById('counter1')
numClicks += 1 
likesElement.innerHTML = `${numClicks} like(s)` 
console.log(likesElement)
}

var numClicks = 0;
function likeStatus2() {
var likesElement = document.getElementById('counter2')
numClicks += 1 
likesElement.innerHTML = `${numClicks} like(s)` 
console.log(likesElement)
}

var numClicks = 0;
function likeStatus3() {
var likesElement = document.getElementById('counter3')
numClicks += 1 
likesElement.innerHTML = `${numClicks} like(s)` 
console.log(likesElement)
}