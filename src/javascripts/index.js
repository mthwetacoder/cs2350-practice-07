// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
const randomBox = function() {
    let rnum = Math.random()
    if(rnum < 0.49){
        document.write('<div class="red box"></div>')
    } else if(rnum > 0.51) {
        document.write('<div class="blue box"></div>')
    } else {
        document.write('<div class="green box"></div>')
    }
}

function createBoxesFor(num_o_boxes) {
    for(let i = 0; i < num_o_boxes; i++) {
        randomBox()
    }
}

function createBoxesWhile(num_o_boxes) {
    let j = 0
    while (j < num_o_boxes) {
        randomBox()
        j++
    }
}

function createBoxesDoWhile(num_o_boxes) {
    let k = 0
    while (k < num_o_boxes) {
        randomBox()
        k++
    }
}

const square = function(x) {
    return x * x
}

// alert("The square of 2 is " + square(2))

createBoxesFor(10)
createBoxesWhile(10)
createBoxesDoWhile(10)