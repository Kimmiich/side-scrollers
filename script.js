let hero = document.getElementById("hero");
let enemy = document.getElementById("enemy");
let counter = 0;
let bottom = 0;
let score = 0;
let life = 3;

function goUp() { //Janne's code, jumping function for the hero
    counter = 0;
    let timer = setInterval(function() {
        counter++
        bottom += 10;
            if (counter == 13) {
            clearInterval(timer)
                   
        let timerDown = setInterval(function() {
            if (bottom == 0) 
                {clearInterval(timerDown)
            }
        bottom -= 13;
        hero.style.bottom = bottom + "px";
        }, 40);
        }
        //console.log("Hej!" + counter);
        hero.style.bottom = bottom + "px";
    }, 40);
}

document.addEventListener("keyup", function(e) { //only one key (ArrowUp) is needed for this game
    console.log(e.key, hero);
    switch (e.key) {
        case "ArrowUp":
            hero.classList.add("keyUp");
            //console.log("hi");
            goUp();
        break                
        };
    });

let lose = setInterval(function(){ //we set of 10 sec, where we check the position of both blocks and if the collide we set game to be over
    let heroBottom = parseInt(window.getComputedStyle(hero).getPropertyValue("bottom")); //getComputedStyle - taking all css propeties for hero, with getPropertyValue we are specifically taking the value of "bottom".
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left")); //getComputedStyle - taking all css propeties for enemy, with getPropertyValue we are specifically taking the value of "left".
    if (enemyLeft < 160 && enemyLeft > 60 && heroBottom <  50) { //condition for checking the collision
    //    life-- 
    //     console.log(life);
    //     if (life == 0) {             (code not working for counting life)
    //     alert("You lose!");
    
        enemy.style.animation= "none";
        hero.style.animation= "none";
        alert("You lose!");
    }  
//    else { 
//         score++                (another piece of code for attemps of counting score)
//         console.log(score);
//     };
}, 10);

console.log("life");