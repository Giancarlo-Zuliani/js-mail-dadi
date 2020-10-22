
//gifs array
var gifs = document.getElementsByClassName('gif');

//points
var point = {
  user : 0 ,
  cpu : 0
}

var audio = new Audio('sound/sound.mp3')

function diceGame(){

  audio.play();

  //generate 2 random number
  let cpuPick = Math.floor(Math.random() * 6 ) + 1 ;
  let userPick = Math.floor(Math.random() * 6 ) + 1 ;
  document.getElementById('userNum').innerHTML = userPick;
  document.getElementById('cpuNum').innerHTML = cpuPick;
  let result = document.getElementById('result');
  //check who win
  if(cpuPick === userPick){
    result.innerHTML="Draw!"
  }else if (cpuPick < userPick){
    result.innerHTML = "You Win!"
    ++point.user;
  }
  else{
    result.innerHTML="You Lose!";
    ++point.cpu;
  };

  document.getElementById('userscore').innerHTML = point.user;
  document.getElementById('cpuscore').innerHTML = point.cpu;

  //random gif

  var v = Math.floor(Math.random() * gifs.length);

  for(i=0; i < gifs.length;i++){
    gifs[i].style.display="none";
  }

  gifs[v].style.display = "block"

};
