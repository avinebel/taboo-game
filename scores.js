let htmlTeam1Add = document.getElementById("addTo1")
let htmlTeam2Add = document.getElementById("addTo2")
let htmlTeam1Score = document.getElementById("score1")
let htmlTeam2Score = document.getElementById("score2")

let team1Score = 0;
let team2Score = 0;

htmlTeam1Add.onclick = () => {
    team1Score++;
    htmlTeam1Score.innerText = team1Score;
}

htmlTeam2Add.onclick = () => {
    team2Score++;
    htmlTeam2Score.innerHTML = team2Score;
}