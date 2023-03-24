let homeTeam = document.getElementById("hometeam");
let awayTeam = document.getElementById("awayteam");
console.log(awayTeam)
let homeScore = 0;
let awayScore = 0;

function onepointhome() {
    homeScore +=1;
    homeTeam.innerText = homeScore
}

function twopointshome() {
    homeScore +=2;
    homeTeam.innerText = homeScore
}

function threepointshome() {
    homeScore +=3;
    homeTeam.innerText = homeScore    
}

function onepointaway() {
    awayScore +=1;
    awayTeam.innerText = awayScore
}

function twopointsaway() {
    awayScore +=2;
    awayTeam.innerText = awayScore
}

function threepointsaway() {
    awayScore +=3;
    awayTeam.innerText = awayScore    
}