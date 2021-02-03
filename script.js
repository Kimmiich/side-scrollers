let hero = document.getElementById("hero");
let enemy = document.getElementById("enemy");
const loserText = document.getElementById("loserText");
const lifeValue = document.querySelector(".lifeValue");

let counter = 0;
let bottom = 0;
let score = 0;
let life = 3;

let isJumping = false; // To only jump once.

// function sound(src) { //code for sound, not working
//   this.sound = document.createElement("audio");
//   this.sound.src = src;
//   this.sound.setAttribute("preload", "auto");
//   this.sound.setAttribute("controls", "none");
//   this.sound.style.display = "none";
//   document.body.appendChild(this.sound);
//   this.play = function(){
//     this.sound.play();
//   }
//   this.stop = function(){
//     this.sound.pause();
//   }
// }

function goUp() {
  //Janne's code, jumping function for the hero
  counter = 0;
  let timer = setInterval(function () {
    counter++;
    bottom += 10;

    if (counter == 13) {
      clearInterval(timer);
      counter = 10;
      let timerDown = setInterval(function () {
        counter--;
        bottom -= 13;
        if (counter == 0) {
          clearInterval(timerDown);
          isJumping = false;
        }
        hero.style.bottom = bottom + "px";
        console.log(hero.style.bottom);
      }, 40);
    }
    //console.log("Hej!" + counter);
    hero.style.bottom = bottom + "px";
    console.log(hero.style.bottom);
  }, 40);
}



// function moveLeft() { //Made moving block in js
//   // const newEnemy = document.getElementById("enemy");
//   let pos = 0;
//   let id = setInterval(frame, 1);
//   function frame() {
//     if(pos == 2000) {
//       clearInterval(id);
//   } else {
//     pos++;
//     enemy.style.right = pos + "px";
//   }
//   }
// }
// moveLeft();

document.addEventListener("keyup", function (e) {
  //only one key (ArrowUp) is needed for this game
  console.log(e.key, hero);
  console.log(e);
  switch (e.key) {
    case "ArrowUp":
      if (!isJumping) {
        isJumping = true;
        //hero.classList.add("heroStyle"); // class not existing
        //console.log("hi");
        goUp();
      }
      break;
    case "Space":
      moveLeft();
      break;   
  }
});

let lose = setInterval(function () {
  //we set of 10 sec, where we check the position of both blocks and if the collide we set game to be over
  let heroBottom = parseInt(
    window.getComputedStyle(hero).getPropertyValue("bottom")
  ); //getComputedStyle - taking all css propeties for hero, with getPropertyValue we are specifically taking the value of "bottom".
  let enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")

  ); //getComputedStyle - taking all css propeties for enemy, with getPropertyValue we are specifically taking the value of "left".
 
  if (enemyLeft < 160 && enemyLeft > 60 && heroBottom < 50) {
     life--; 
    //condition for checking the collision
    alert("you loses one life ,Now your life is : "+ life );
    console.log(life);
    lifeValue.innerHTML = life; 
  
 
 if (life == 0) {
  
    enemy.style.animation = "none";
    hero.style.animation = "none"; 
    alert("you lose");
    loserText.innerHTML ="GAME OVER!";
    
}
}
    //    else {
    //         score++                (another piece of code for attemps of counting score)
    //         console.log(score);
    //     };
  
}, 40);

console.log("life");

// knapp som sätter igång animationen

//startButtom
