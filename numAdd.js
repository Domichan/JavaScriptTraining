

Number.prototype.add = function () {
    var a = this,
        i;
    for (i = 0; i < arguments.length; i++) {
        a += arguments[i];
    }

    return a;
};

var num = 5;
num.add(1,2,3);

