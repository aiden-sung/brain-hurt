//alert("hello")
//var name=prompt ("what is your name")
//alert (name)

var x = 100;
var y = 250;

var stamina = 10;
var maxStamina = 10;

var chara = {
    x: 100,
    y: 250,
    width: 20,
    height: 30,
    color: 'blue',
};

var ground = {
    x: 0,
    y: 350,
    width: 251,
    height: 150,
    color: 'orange',
}

var keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    Shift: false,
}

var context = window.canvasgame.getContext("2d")
context.canvas.width = 350;
context.canvas.height = 450;

function boxTouch(rect1, rect2) {
    return (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y);
}

function drawRect(rect) {
    context.fillStyle = rect.color;
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function main() {
    var width = context.canvas.width;
    var height = context.canvas.height;
    var touch = boxTouch(chara, ground);

    var speed = 1;

    if (stamina < maxStamina)
        stamina = stamina + 0.1;

    window.staminadis.innerText = Math.round(stamina) + '/' + Math.round(maxStamina)

    if (keys.Shift && stamina > 0) {
        stamina = stamina - 0.2;
        speed = 2;
        maxStamina = maxStamina + 0.01

    }

    if (keys.d && chara.x < width - chara.width)
        chara.x = chara.x + speed;

    if (keys.w && chara.y > 0)
        chara.y = chara.y - speed;

    if (keys.s && chara.y < height - chara.height)
        chara.y = chara.y + speed;

    if (keys.a && chara.x > 0)
        chara.x = chara.x - speed;

    if (touch)
        chara.color = 'purple';
    else
        chara.color = 'blue';


    // clear screen
    context.clearRect(0, 0, width, height);

    // draw ground/character
    drawRect(ground);
    drawRect(chara);

    requestAnimationFrame(main);
}

document.onkeydown = function (e) {
    //   console.log(e)
    if (e.code === 'KeyA')
        keys.a = true;

    if (e.code === 'KeyS')
        keys.s = true;

    if (e.code === 'KeyD')
        keys.d = true;

    if (e.code === 'KeyW')
        keys.w = true;

    if (e.code === 'ShiftLeft')
        keys.Shift = true;
}

document.onkeyup = function (e) {
    if (e.code === 'KeyA')
        keys.a = false;

    if (e.code === 'KeyS')
        keys.s = false;

    if (e.code === 'KeyD')
        keys.d = false;

    if (e.code === 'KeyW')
        keys.w = false;

    if (e.code === 'ShiftLeft')
        keys.Shift = false;
}




main();


