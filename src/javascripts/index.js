// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
let c = document.querySelector('canvas');
ctx = c.getContext('2d');

const clear = function() {
    ctx.clearRect(0, 0, 500, 395);
}

function make_cube() {
    clear();

    let x = 10;
    x = document.getElementById('x').value;

    ctx.strokeStyle = document.getElementById('c').value;
    ctx.fillStyle = document.getElementById('c').value;
    ctx.strokeRect(10, 10, x * 25, x * 25);
    ctx.strokeRect(10 + (x * 25) / 2, 10 + (x * 25) / 2, x * 25, x * 25);

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10 + (x * 25) / 2, 10 + (x * 25) / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10 + x * 25, 10);
    ctx.lineTo(10 + (x * 25) / 2 + (x * 25), 10 + (x * 25) / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 10 + x * 25);
    ctx.lineTo(10 + (x * 25) / 2, 10 + (x * 25) / 2 + (x * 25));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10 + x * 25, 10 + x * 25);
    ctx.lineTo(10 + (x * 25) / 2 + (x * 25), 10 + (x * 25) / 2 + (x * 25));
    ctx.stroke();
}

function randomDots() {
    clear(); //clears the whole canvas, then does below
    num_o_dots = document.getElementById('amount').value;
    for (let i = 0; i < num_o_dots; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = "rgb(" + r + "," + g + "," + b + ")";

        ctx.fillStyle = color;
        ctx.fillRect(Math.random() * 500, Math.random() * 395, 5, 5);
    }
}

function choosing_canvas(){
    clear(); //clears the whole canvas, then does below

    choice = document.getElementById('Canvas_type');
    if (choice.value == "undefined"){
        document.getElementById('cube_options').style.display = "none";
        document.getElementById('dots_options').style.display = "none";
    } 
    else if (choice.value == "cube") {
        clear();
        make_cube();
        document.getElementById('dots_options').style.display = "none";
        document.getElementById('cube_options').style.display = "inline";

        document.getElementById('x').onchange = make_cube;
        document.getElementById('c').onchange = make_cube;
    } else if (choice.value == "random_dots") {
        clear();
        document.getElementById('cube_options').style.display = "none";
        document.getElementById('dots_options').style.display = "inline";

        randomDots();
        document.getElementById('amount').onchange = randomDots;
    }
}
// document.body.onload = choosing_canvas;
//document.body.onload = randomDots;
document.getElementById('Canvas_type').onchange = choosing_canvas;
