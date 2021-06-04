canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120; 
car2_height = 70;
car2_image = "car1.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == 38){
        car1_up();
        console.log("up");
    }
    if(keypressed == 40){
        car1_up();
        console.log("down");
    }
    if(keypressed == 37){
        car1_up();
        console.log("left");
    }
    if(keypressed == 39){
        car1_up();
        console.log("right");
    }
    if(keypressed == 87){
        car1_up();
        console.log("w");
    }
    if(keypressed == 65){
        car1_up();
        console.log("a");
    }
    if(keypressed == 83){
        car1_up();
        console.log("s");
    }
    if(keypressed == 68){
        car1_up();
        console.log("d");
    }
}