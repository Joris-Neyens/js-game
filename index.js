const container = document.querySelector(".container");
const person = document.querySelector(".person");
const enemy = document.querySelector(".enemy");
const score = document.querySelector(".score")


document.addEventListener("keyup", clickSpacebar);

function clickSpacebar(event) {
  
    if(event.code === "Space") {
        jump();
    }

    
};

function jump() {
    if(person.classList !== "animation") {
    person.classList.add("animation")
    }

    setTimeout(function() {
    person.classList.remove("animation")
    }, 500);
}

startScore = 100;
const checkHit = setInterval(function() {
    const personTop = 
    parseInt(window.getComputedStyle(person).getPropertyValue("top"));

    const enemyLeft = 
    parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

        if(enemyLeft<120 && enemyLeft>100 && personTop >= 400) {
            scoreBoard();
            enemy.style.animation = "none";
            
        }

}, 10);

function scoreBoard() {
    score.innerHTML = `<p>${startScore - 10}</p>`;
}

