let box = document.getElementById("box");
let counter = 0;
let bottom = 0;

function goUp() {
    counter = 0;
    let timer = setInterval(function() {
        counter++
        bottom += 10;
            if (counter == 10) {
            clearInterval(timer)
                   
        let timerDown = setInterval(function() {
            if (bottom == 0) 
                {clearInterval(timerDown)
            }
        bottom -= 10;
        box.style.bottom = bottom + "px";
        }, 100);
        }
        console.log("Hej!" + counter);
        box.style.bottom = bottom + "px";
    }, 100);
}


document.addEventListener("keyup", function(e) {
    console.log(e.key, box);
    switch (e.key) {
        case "ArrowUp":
            box.classList.add("keyUp");
            box.classList.remove("keyDown");
            box.classList.remove("keyLeft");
            box.classList.remove("keyRight");
            console.log("hi");
            goUp();
        break

        case "ArrowDown":
            box.classList.remove("keyUp");
            box.classList.add("keyDown");
            box.classList.remove("keyLeft");
            box.classList.remove("keyRight");
        break

        case "ArrowLeft":
            box.classList.remove("keyUp");
            box.classList.remove("keyDown");
            box.classList.add("keyLeft");
            box.classList.remove("keyRight");
        break
                
        case "ArrowRight":
            box.classList.remove("keyUp");
            box.classList.remove("keyDown");
            box.classList.remove("keyLeft");
            box.classList.add("keyRight");
        break
                
        }
    });