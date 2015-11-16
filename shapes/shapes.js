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

////////////////////////

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

///////////////////////////////////

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

function Form() {
    this.circleBtn = document.querySelector('#add-circle-btn');
    this.squareBtn = document.querySelector('#add-square-btn');
}

Form.prototype.clearForm = function() {
    document.getElementById('x').value = "";
    document.getElementById('y').value = "";
    document.getElementById('back').value = "";
    document.getElementById('z').value = "";

};

Form.prototype.overlay = function() {
    var el = document.getElementById('overlay');
    el.style.visibility = (el.style.visibility == 'visible') ? 'hidden' : 'visible';
};

Form.prototype.addCircle = function() {
    var self = this;
    document.getElementsByTagName('h2') [0].innerHTML = "Circle";
    document.getElementById('lastParam').innerHTML = "Radius:";
    document.querySelector('#add-btn').onclick = function () {
        var c1 = new Circle();
        c1.draw();
        self.clearForm();
        self.overlay();
    };
    document.querySelector('#cancel-btn').onclick = function () {
        self.overlay();
    };
    this.overlay();

};

Form.prototype.addSquare = function() {
    var self = this;
    document.getElementsByTagName('h2') [0].innerHTML = "Square";
    document.getElementById('lastParam').innerHTML = "Width:";
    document.querySelector('#add-btn').onclick = function () {
        var s1 = new Square();
        s1.draw();
        self.clearForm();
        self.overlay();
    };
    document.querySelector('#cancel-btn').onclick = function () {
        self.overlay();
    };
    this.overlay();

};


window.onload = function () {
    var form = new Form();

    form.circleBtn.onclick = function () {
        form.addCircle();
    };
    form.squareBtn.onclick = function () {
        form.addSquare();
    };
};
