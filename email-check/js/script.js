
// array full of accepted mails
var mailList = ["ciao@gmail.com" , "ciao@libero.it" , "ciao@hotmail.com" , "pippo@gmail.com" , "helloworld@gmail.com" , "pippo@hotmail.com" , "helloworld@hotmail.com" , "boolean@gmail.com" , "boolean@libero.it" , "boolean@hotmail.com" , "booleancareers@gmail.com" , "booleancareers@hotmail.com" , "1234@gmail.com" ];

// check password 

function check(){
  document.getElementById('result').innerHTML = "";
  let x
  let userMail = document.getElementById('mail').value;

  for( i=0 ; i < mailList.length ; i++ ){

    if(userMail === mailList[i]){
       x = true;
    }

    if(x){
      document.getElementById('result').innerHTML = "Password accepted";
      }else {
      document.getElementById('result').innerHTML = "Invalid password";
    }
  }
}
