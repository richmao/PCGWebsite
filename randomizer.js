//Academics
//Finances
//Personal Information
//Class Button
//Holds
//To Do List
//Enrollment
//Advisor
//Student Records Enrollment

$(document).ready(function () {
    cssGrammar();
});

var buttonIDs = ["academicsB", "financesB", "personalInfoB", "classButtonB", "holdsB", "toDoB", "enrollmentB", "recordsB"];
var sectionIDs = ["academics", "finances", "personalInfo", "classButton", "holds", "toDo", "enrollment", "records"];

cssGrammar = function () {
    let cssRules = {
        'origin': '#font-family# #text-align#',
        'font-family': ['Impact', '\"Comic Sans MS\"', '\"Lucida Console\"'],
        'text-align': ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
        'properties': ['font-family', 'text-align', 'text-align']
    }
    let cssGrammar = tracery.createGrammar(cssRules);
    let tags = ["h4", "p", "h5", "tr", "td", "th"];
    tags.forEach(function (tag) {
        //$(tag).addClass(cssGrammar.flatten("#origin#"));
        var property = cssGrammar.flatten("#properties#");
        var propertyString = "#" + property + "#";
        console.log(tag + ": " + property);
        $(tag).css(property, cssGrammar.flatten(propertyString));
        //$(tag).css(property, $(cssGrammar.flatten(propertyString)).val());
    });
}

window.onload = function () {
    document.getElementById("reRollB").addEventListener("click", function () {
        cssGrammar();
    })
    for (let i = 0; i < buttonIDs.length; i++) {
        document.getElementById(buttonIDs[i]).addEventListener("click", function () {
            document.getElementById(sectionIDs[i]).style.color = randomColor();
            document.getElementById(sectionIDs[i]).style.textSize = randomSize();
        });
    }
}

//https://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//https://stackoverflow.com/questions/45791859/random-font-size-and-set-a-min-and-max-of-the-character
function randomSize() {
    return Math.floor((Math.random() * 8) + 3) + "px";
}