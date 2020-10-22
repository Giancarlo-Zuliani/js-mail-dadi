//Genero due numeri causuali da 1 a 6 e li confronto;


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
};


diceGame();
