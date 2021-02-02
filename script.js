let hero = document.getElementById("hero");
let enemy = document.getElementById("enemy");
let counter = 0;
let bottom = 0;

function goUp() {
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
        console.log("Hej!" + counter);
        hero.style.bottom = bottom + "px";
    }, 40);
}

document.addEventListener("keyup", function(e) {
    console.log(e.key, hero);
    switch (e.key) {
        case "ArrowUp":
            hero.classList.add("keyUp");
            console.log("hi");
            goUp();
        break                
        };
    });

let life = setInterval(function(){
    let heroBottom = parseInt(window.getComputedStyle(hero).getPropertyValue("bottom"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

    if (enemyLeft < 160 && enemyLeft > 60 && heroBottom >= 50) {
        enemy.style.animation= "none";
        alert("You lose!");
    };
}, 10);