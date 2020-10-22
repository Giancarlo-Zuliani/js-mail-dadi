//Genero due numeri causuali da 1 a 6 e li confronto;


var gifs = document.getElementsByClassName('gif');



function diceGame(){
  let cpuPick = Math.floor(Math.random() * 6 ) + 1 ;
  let userPick = Math.floor(Math.random() * 6 ) + 1 ;
  console.log(cpuPick);
  console.log(userPick);
  if(cpuPick === userPick){
    console.log('pareggio')
  }else if (cpuPick < userPick){
    console.log('hai vinto')
  }
  else{
    console.log('hai perso')
  }
  var v = Math.floor(Math.random() * gifs.length - 1);
  console.log(v);
  for(i=0; i < gifs.length;i++){
    gifs[i].style.display="none";
  }

  gifs[v].style.display = "block"
};

diceGame();



console.log(gifs);


//random number for gift
