let cvs = document.getElementById("snake");
let context = cvs.getContext("2d");

const box = 32;

const groundImage = new Image();
groundImage.src = "JS/img/ground.png";

const foodImage = new Image();
foodImage.src = "JS/img/food.png";

let snake = [];
snake[0] = {
    x: 9 * box,
    y:10 *box
} 

let food = {
    x: Math.floor(Math.random()*17+1) * box,
    y: Math.floor(Math.random()*15+3) * box
}

let score = 0;
let d;
document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode == 37){
        d = "LEFT";
    }
   else if(event.keyCode == 38){
        d = "UP";
    }
    else if(event.keyCode == 39){
        d= "RIGHT"
    }
    else if(event.keyCode == 40){
        d = "DOWN"
    }

}
function draw(){
    context.drawImage(groundImage,0,0);
    for(let i=0;i< snake.length;i++){
        context.fillStyle = (i==0) ? "green" : "white";
        context.fillRect(snake[i].x,snake[i].y,box,box);
        context.strokeStyle = "red";
        context.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    context.drawImage(foodImage,food.x,food.y);
    context.fillStyle = "white";
    context.font = "45 px Changa one";
    context.fillText(score,2*box,1.6*box);
}

let game = setInterval(draw,100);