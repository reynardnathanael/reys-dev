function showMenu() {
    var navlist = document.getElementById("nav-list");
    var nav = document.querySelector("nav");
    navlist.classList.toggle("invisible");
    nav.classList.toggle("nav-height");
}

function hideShowSidebar() {
    document.getElementById("sidebar").classList.toggle("hide");
}

function collapse(element, type) {
    type === 'sidebar' ? element.classList.toggle('open-sidebar') : element.classList.toggle('open');
    // element.classList.toggle('open');
    if (element.nextElementSibling.style.maxHeight) {
        element.nextElementSibling.style.maxHeight = null;
    }
    else {
        element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + 'px';
    }
}

function fade(img, number) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            document.getElementById("img-container").children[0].src = 'img/portfolio-' + number.toString() + '.jpg';
            var dots = document.getElementsByClassName('dot');
            for (var i = 0; i < dots.length; i++) {
                dots[i].style.backgroundColor = 'white';
            }

            document.getElementById(number.toString()).style.backgroundColor = '#FFC776';

            var timer2 = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer2);
                }
                img.style.opacity = op;
                img.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
            }, 1);
        }
        img.style.opacity = op;
        img.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 1);
}

function swipeLeft() {
    var currentImg = document.getElementById("img-container").children[0];
    var firstSplit = currentImg.src.split('/');
    var secondSplit = firstSplit[firstSplit.length-1].split('-');
    var order = secondSplit[secondSplit.length-1].replace('.jpg', '');
    
    if (order === '1') {
        order = '4';
    }
    else {
        order = parseInt(order) - 1;
    }

    fade(currentImg, order);
}

function swipeRight() {
    var currentImg = document.getElementById("img-container").children[0];
    var firstSplit = currentImg.src.split('/');
    var secondSplit = firstSplit[firstSplit.length-1].split('-');
    var order = secondSplit[secondSplit.length-1].replace('.jpg', '');
    
    if (order === '4') {
        order = '1';
    }
    else {
        order = parseInt(order) + 1;
    }

    fade(currentImg, order);
}

function redirect(type) {
    if (type === 'linkedin') {
        window.open('https://linkedin.com/in/reynardnathanael', '_blank');
    }
    if (type === 'github') {
        window.open('https://github.com/reynardnathanael', '_blank');
    }
    if (type === 'instagram') {
        window.open('https://instagram.com/', '_blank');
    }
    if (type === 'gmail') {
        window.open('mailto:reyssdev@gmail.com', '_blank');
    }
}