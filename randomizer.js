var buttonIDs = ["academicsB", "financesB", "personalInfoB", "classButtonB", "holdsB", "toDoB", "enrollmentB", "recordsB"];
var sectionIDs = ["academics", "finances", "personalInfo", "classButton", "holds", "toDo", "enrollment", "records"];
var buttons = []; //dynamically changes with what is on page
var buttonText = ["Academics","Finances","Personal Information","Class Button","Holds","To Do List","Enrollment","Student Records Enrollment"]; //text that goes in the buttons

let htmlRules = {
  'origin':'#sections# #sections# #sections# #sections# #sections#',
  'sections': ['#classButton#', '#holds#', '#toDo#','#enrollment#','#records#'],
  'classButton': ['<div id=\"classButton\"><div class=\"border\"><h5 class=\"button\">SEARCH FOR CLASSES</h5></div></div><div class=\"vertSpacer\"></div>'],
  'holds':['<div id=\"holds\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Holds</th><th class=\"box\"></th></tr><tr class=\"boxHold\"><td class=\"box\">No Holds</td><td class=\"box\"></td></tr></table></div><div class=\"vertSpacer\"></div>'],
  'toDo':['<div id=\"toDo\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">To Do List</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxLink\">Authorization to Release Info</td><td class=\"box\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxSpacer\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxEnder\">more<img src=\"arrow3.png\"></td></tr></table></div><div class=\"vertSpacer\"></div>'],
  'enrollment':['<div id=\"enrollment\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Enrollment Dates</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxDescriptor\">Enrollment Appointment</td><td class=\"box\"></td></tr><tr class=\"box\"><td class=\"box\">You may begin enrolling for the 2018 Winter Quarter Regular Academic Session session on November 27, 2017</td>    <td class=\"boxSpacer\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxEnder\">details<img src=\"arrow3.png\"></td></tr></table></div><div class=\"vertSpacer\"></div>'],
  'records':['<div id=\"records\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Student Records and Enrollment</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxLink\">California Voter Registration</td><td class=\"box\"></td></tr></table></div<div class=\"vertSpacer\"></div>']
}

function htmlRedo(){
  //let rightColumn = document.getElementById('rightColumn');
  let htmlGrammar = tracery.createGrammar(htmlRules);
  $('#rightColumn').empty();
  $("#rightColumn").append(htmlGrammar.flatten('#origin#'));
}

cssGrammar = function () {
    let cssRules = {
        'font-family': ['Impact', '\"Comic Sans MS\"', '\"Lucida Console\"', '\'Gloria Hallelujah\', cursive', '\'Bonbon\', cursive'],
        'text-align': ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
        'properties': ['font-family', 'text-align'],
        'origin':['font-family text-align color background-color font-size']
    }
    let cssGrammar = tracery.createGrammar(cssRules);
    let tags = ["h5", "h4", "p", "h5", "tr", "td", "th",
        "body", "hr", "h4.title", "h4.box", "h5.box", "h5.button", "p.link", "p.bigLink", "p.linkDescriptor", "p.ender",
        "div.links", "div.vertSpacer", "div#dropdown", "div.border", "img.arrow2", "table.schedule", "table.notSchedule",
        "table.box", "tr.schedule", "tr.box", "tr.boxHolder", "th.schedule", "th.notSchedule", "th.box", "td.schedule",
        "td.vertSpacer", "td.descriptor", "td.link", "td.box", "td.boxLink", "td.boxSpacer", "td.boxEnder", "td.boxDescriptor",
        "button#reRollB","button#academicsB","button#financesB","button#personalInfoB","button#classButtonB","button#holdsB","button#toDoB","button#enrollmentB","button#recordsB"
    ];
    tags.forEach(function (tag) {
        var toChange = cssGrammar.flatten("#origin#").split(" ");
        for(let i=0; i < toChange.length; i++){
          var property = toChange[i];
          if(property == 'color' || property == 'background-color'){
              $(tag).css(property, randomColor());
          }else if(property == 'font-size'){
              $(tag).css(property, randomSize());
          }else{
              $(tag).css(property, cssGrammar.flatten("#" +property+ "#"));
          } 
        }
    });
}

window.onload = function () {
    document.getElementById("reRollB").addEventListener("click", function () {
        htmlRedo();
        resetButtons();
        cssGrammar();
    })
    resetButtons();
}

//https://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//https://stackoverflow.com/questions/45791859/random-font-size-and-set-a-min-and-max-of-the-character
function randomSize() {
    return Math.floor((Math.random() * 12) + 12) + "px";
}

function resetButtons(){
    for (let i = 0; i < buttonIDs.length; i++) {
        //Remove existing buttons
        let buttons = $("[id="+buttonIDs[i]+"]");
        for(let j=0; j < buttons.length; j++){
            buttons.remove();
        }
        //Create new buttons
        if(document.getElementById(sectionIDs[i]) != null) {
            let elements = $("[id="+sectionIDs[i]+"]");
            for(let j=0; j < elements.length; j++){
                $('#buttons').append('<button id="'+buttonIDs[i]+'">'+buttonText[i]+'</button>');
                document.getElementById(buttonIDs[i]).addEventListener("click", function () {
                    elements[j].style.color = randomColor();
                    elements[j].style.textSize = randomSize();    
                });
            }
        }
    }
}