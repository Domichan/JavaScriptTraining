var type;
function Figure() {
    this.x = document.getElementById('x').value;
    this.y = document.getElementById('y').value;
    this.background = document.getElementById('back').value;
    this.canvas = document.getElementById('drawField');
    this.context = this.canvas.getContext('2d');
}

Figure.prototype.draw = function () {
    if (this.canvas.getContext) {
        this.context.strokeText('This could be any figure you want:)', 50, 50);
    }
};

function Square() {
    Figure.call(this);
    this.width = document.getElementById('z').value;
}

Square.prototype = Object.create(Figure.prototype);


Square.prototype.draw = function () {
    if (this.canvas.getContext) {
        this.context.fillStyle = this.background;
        this.context.fillRect(this.x, this.y, this.width, this.width);
    }
};

function Circle() {
    Figure.call(this);
    this.radius = document.getElementById('z').value;
}

Circle.prototype = Object.create(Figure.prototype);


Circle.prototype.draw = function () {
    if (this.canvas.getContext) {
        this.context.fillStyle = this.background;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fill();
    }
};

function addSquare() {
    document.getElementsByTagName('h2') [0].innerHTML = "Square";
    document.getElementById('lastParam').innerHTML = "Width:";
    type = 'Square';
    overlay();
}

function addCircle() {
    document.getElementsByTagName('h2') [0].innerHTML = "Circle";
    document.getElementById('lastParam').innerHTML = "Radius:";
    type = 'Circle';
    overlay();

}

function clearForm() {
    document.getElementById('x').value = "";
    document.getElementById('y').value = "";
    document.getElementById('back').value = "";
    document.getElementById('z').value = "";

}

function launchAdding() {
    var f1;
    switch (type) {
        case 'Square':
            f1 = new Square();
            break;
        case 'Circle':
            f1 = new Circle();
            break;
        default:
            f1 = new Figure();
    }
    f1.draw();
    clearForm();
    overlay();
}

function overlay() {
    var el = document.getElementById('overlay');
    el.style.visibility = (el.style.visibility == 'visible') ? 'hidden' : 'visible';
}