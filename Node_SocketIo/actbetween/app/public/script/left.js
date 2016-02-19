(function () {
    var socket = io();
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    $('.info').html('width:' + canvas.width + '<br>' + 'height:' + canvas.height);
    //var ball = {x: 10, y: 100, r: 10, d: 'right'};
    var balls = [];
    var step = 1;


    canvas.addEventListener("mousedown", function (e) {
        e.preventDefault();
        var _ball = {
            id: 'l' + balls.length.toString(),
            x: e.clientX,
            y: e.clientY,
            r: 10,
            d: 'right'
        }
        balls.push(_ball);
        balls = _.compact(balls);
    });

    socket.on('startLeft', function (data) {
        console.log(data);
        balls.push(data);
    });

    draw();
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'steelblue';
        multiBalls();
        requestAnimationFrame(draw);
    }

    function multiBalls() {
        for(var i=0;i<balls.length;i++) {
           var _ball = balls[i];
            singleBall(_ball);
        }
    }

    function singleBall(ball) {
        if (ball.x <= canvas.width + ball.r) {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
            ctx.fill();
            ball.d == 'right' ? ball.x += step : ball.x -= step
        }

        if (ball.x == canvas.width - ball.r) {
            socket.emit('startRight', ball);
            ball = null;
        }

        if (ball && ball.x == ball.r) {
            ball.d = 'right';
        }
    }

})();
