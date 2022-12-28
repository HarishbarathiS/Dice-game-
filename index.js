


document.querySelector(".btn").addEventListener("click",game);

function game(){

  // for dice 1
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomdiceimg1 = "images/dice"+ randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg1);

  // for dice 2

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var randomdiceimg2 = "images/dice"+ randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg2);



  if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!🎊";
    document.querySelector(".btn").innerHTML = "Dude!! Player 2 don't lose hope go ahead and click me again";

  }else if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML = "Its a Draw🤝";
    document.querySelector(".btn").innerHTML = "penalties?? nah!!";
  }else{
    document.querySelector("h1").innerHTML = "Player 2 wins!!🎊";
    document.querySelector(".btn").innerHTML = "Player 1 stick on!! Its going your way the next time! go ahead and click me again";

  }

}
