function randomColor() {
    
    return {
        red: Math.random() + 0.3,
        green: Math.random() + 0.3,
        blue: Math.random(),
        alpha: (Math.random() * 0.6 ) + 0.1
    };
}

function randomDarkColor() {
    
    return {
        red: Math.random() + 0.3,
        green: Math.random() + 0.3,
        blue: Math.random() + 0.8,
    };
}

tool.maxDistance = 65;

function onMouseDown(event) {
    var color = randomDarkColor();
    myPath = new Path();
    myPath.strokeColor = color;
}

function onMouseDrag(event) {
    if(Key.isDown('a')) {
        myPath.add(event.point);
    }
    else {
        var color = randomColor();
        var x = event.middlePoint.x;
        var y = event.middlePoint.y;
        var radius = event.delta.length / 2;
        //drawCircle(x, y, radius, color);
        emitCircle(x, y, radius, color);
    }
} 
 
function drawCircle( x, y, radius, color ) {
    var circle = new Path.Circle(new Point(x, y), radius);
    circle.fillColor = new RgbColor(color.red, color.green, color.blue, color.alpha);
    view.draw();
} 
 
function emitCircle(x, y, radius, color) {
    var data = {
        x:x,
        y:y,
        radius:radius,
        color:color
    };

    socket.emit('draw circle', data);
    console.log(data)
}

socket.on('client draw circle', function(data) {
    console.log('Drawing circle')
    drawCircle(data.x, data.y, data.radius, data.color);
});
