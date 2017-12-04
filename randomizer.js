var x = document.getElementsByTagName("*");
console.log(x);

// Currently just changes color, assuming you know the selector
function changeStyle(selector, color) {
    console.log('changing ' + selector + ' to ' + color);
    $('<style>' + selector + ' { color: ' + color + ';</style>').appendTo('head');
}

changeStyle('h4.title', 'blue');
changeStyle('h4.box', 'white');
