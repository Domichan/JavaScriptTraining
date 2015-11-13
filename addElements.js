function addElement() {
    var list = document.getElementsByClassName('list')[0],
        html = "";

    for (i = 1; i < 51; i++) {
        if(i % 3 == 0) {
            html += '<li class="third">' + i + '</li>';
        } else {
            html += '<li>' + i + '</li>';
        }

    }
    list.innerHTML = html;
    console.log('aaa');

    list.addEventListener('click',function (e) {
        if (e.target.tagName === 'LI' && e.target.className === 'third') {
            e.target.className = e.target.className + " clicked";
        }
    });
    list.removeEventListener('click', arguments.callee, false);


}