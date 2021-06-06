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
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1();
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2();
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
        car1_down();
        console.log("down");
    }
    if(keypressed == 37){
        car1_left();
        console.log("left");
    }
    if(keypressed == 39){
        car1_right();
        console.log("right");
    }
    if(keypressed == 87){
        car2_up();
        console.log("w");
    }
    if(keypressed == 65){
        car2_left();
        console.log("a");
    }
    if(keypressed == 83){
        car2_down();
        console.log("s");
    }
    if(keypressed == 68){
        car2_right();
        console.log("d");
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " and y = "+ car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}

function car1_down(){
    if(car1_y <= 600){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " and y = "+ car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_x >= 0){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " and y = "+ car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 

function car1_left(){
    if(car1_x <= 800){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " and y = "+ car1_y)
    }
} 

function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("When w key is pressed, x = " + car2_x + " and y = "+ car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if(car2_y <= 600){
        car2_y = car2_y + 10;
        console.log("When s key is pressed, x = " + car2_x + " and y = "+ car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_x >= 0){
        car2_x = car2_x + 10;
        console.log("When d key is pressed, x = " + car2_x + " and y = "+ car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 

function car2_left(){
    if(car2_x <= 800){
        car2_x = car2_x - 10;
        console.log("When a key is pressed, x = " + car2_x + " and y = "+ car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 