function Scheduler() {
    this.month = document.getElementById('monthSetter').value;
    this.year = document.getElementById('yearSetter').value;
}

Scheduler.prototype.daysInMonth = function (monthStd, year) {
    return new Date(year, monthStd, 0).getDate();
};

Scheduler.prototype.fillBeginning = function (month, year) {
    var startHtml = '',
        d = new Date(year, month, 1),
        howMany = d.getDay(),
        i;
    for (i = 0; i < howMany; i++) {
        startHtml += '<div class="box day"></div>';
    }
    return startHtml;
};

Scheduler.prototype.fillCenter = function (month, year) {
    var middleHtml = '',
        howMany = this.daysInMonth(month + 1, year),
        i;
    for (i = 1; i <= howMany; i++) {
        middleHtml += '<div class="box day">' + i + '</div>';
    }
    return middleHtml;
};

Scheduler.prototype.fillEnding = function (month, year) {
    var endHtml = '',
        lastDay = this.daysInMonth(month + 1, year),
        howMany = 6 - (new Date(year, month, lastDay).getDay()),
        i;
    for (i = 0; i < howMany; i++) {
        endHtml += '<div class="box day"></div>';
    }
    return endHtml;
};

function Form() {
    this.monthSelect = document.querySelector('#monthSetter');
    this.yearSelect = document.querySelector('#yearSetter');
}

Form.prototype.createCalendar = function () {
    var scheduler = new Scheduler(),
        headerHtml = '<div class=" box day weekDays"> <h1>Sunday</h1></div>' +
            '<div class=" box day weekDays"> <h1>Monday</h1></div>' +
            '<div class=" box day weekDays"> <h1>Tuesday</h1></div>' +
            '<div class=" box day weekDays"> <h1>Wednesday</h1></div>' +
            '<div class=" box day weekDays"> <h1>Thursday</h1></div>' +
            '<div class=" box day weekDays"> <h1>Friday</h1></div>' +
            '<div class=" box day weekDays"> <h1>Saturday</h1></div>',
        html = headerHtml + scheduler.fillBeginning(scheduler.month, scheduler.year) + scheduler.fillCenter(scheduler.month, scheduler.year) + scheduler.fillEnding(scheduler.month, scheduler.year),
        content = document.querySelector('.content');
    content.innerHTML = html;
};

Form.prototype.loadLists = function () {
    var html = '',
        content = [ "January","February","March","April","May","Jun","July","August","September","October","November", "December"],
        i;
    for (i = 0; i < content.length; i++) {
        html+= '<option value="' + i + '">' + content[i] + '</option>';
    }

    this.monthSelect.innerHTML = html;
};

window.onload = function () {
    var form = new Form();

    form.loadLists();

    form.monthSelect.onchange = function () {
        form.createCalendar();
    };

    form.yearSelect.onchange = function () {
        form.createCalendar();
    };
};


