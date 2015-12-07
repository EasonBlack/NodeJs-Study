var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var socket = io();
socket.on('mouse', function(data){
    rect1.setPosition(data);
    rect2.setPosition(data);
});

var gridOptions = {
    x: 10,
    y: 10,
    w: 50,
    strokeColor: '#CCCCCC'
}

var rect1Options = {
    id: 1,
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    fillColor: '#009966',
    strokeColor: '#CCCCCC',
    element : '#canvas'
}
var rect2Options = {
    id:2,
    x: 60,
    y: 10,
    w: 50,
    h: 50,
    fillColor: '#336699',
    strokeColor: '#CCCCCC',
    element : '#canvas'
}
var grid = new Grid(ctx, gridOptions);

var rect1 = new Rectangular(ctx, rect1Options);
var rect2 = new Rectangular(ctx, rect2Options);

draw();
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var boxes = [];
    grid.draw();
    boxes = grid.getBoxes();
    rect1.draw(boxes);
    rect2.draw(boxes);

    requestAnimationFrame(draw);
}


