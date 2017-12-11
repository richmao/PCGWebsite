var buttonIDs = ["academicsB", "financesB", "personalInfoB", "classButtonB", "holdsB", "toDoB", "enrollmentB", "recordsB"];
var sectionIDs = ["academics", "finances", "personalInfo", "classButton", "holds", "toDo", "enrollment", "records"];
var buttons = []; //dynamically changes with what is on page
var buttonText = ["Academics","Finances","Personal Information","Class Button","Holds","To Do List","Enrollment","Records"]; //text that goes in the buttons

let htmlRules = {
  'origin':['#rightStyleColumn#','#leftStyleColumn#'],
  'leftStyleColumn':['#sections# #sections# #sections#'],
  'rightStyleColumn':['#sections#<div class=\"vertSpacer\"></div>#sections#<div class=\"vertSpacer\"></div>#sections#<div class=\"vertSpacer\"></div>#sections#<div class=\"vertSpacer\"></div>#sections#'],
  'sections': ['#classButton#','#holds#','#toDo#','#enrollment#','#records#','#academics#','#finances#','#personalInfo#'],
  'classButton': ['<div id=\"classButton\"><div class=\"border\"><h5 class=\"button\">SEARCH FOR CLASSES</h5></div></div><div class=\"vertSpacer\"></div>'],
  'holds':['<div id=\"holds\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Holds</th><th class=\"box\"></th></tr><tr class=\"boxHold\"><td class=\"box\">No Holds</td><td class=\"box\"></td></tr></table></div>'],
  'toDo':['<div id=\"toDo\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">To Do List</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxLink\">Authorization to Release Info</td><td class=\"box\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxSpacer\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxEnder\">more<img src=\"arrow3.png\"></td></tr></table></div>'],
  'enrollment':['<div id=\"enrollment\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Enrollment Dates</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxDescriptor\">Enrollment Appointment</td><td class=\"box\"></td></tr><tr class=\"box\"><td class=\"box\">You may begin enrolling for the 2018 Winter Quarter Regular Academic Session session on November 27, 2017</td>    <td class=\"boxSpacer\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxEnder\">details<img src=\"arrow3.png\"></td></tr></table></div>'],
  'records':['<div id=\"records\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Student Records and Enrollment</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxLink\">California Voter Registration</td><td class=\"box\"></td></tr></table></div>'],
  'academics':['<div class=\"row\"><div class=\"col-lg-12\" id=\"box\"><h4 class=\"box\"><img src=\"arrow.png\">Academics</h4>#academicsColumns#</div></div>'],
  'finances':['<div id=\"finances\"><div class=\"row\"><div class=\"col-lg-12\" id=\"box\"><h4 class=\"box\"><img src=\"arrow.png\">Finances</h4><div class=\"col-lg-4\"><div class=\"links\"><p class=\"linkDescriptor\">My Account</p><p class=\"link\">Account Inquiry</p><p class=\"linkDescriptor\">Financial Aid</p><p class=\"link\">View Financial Aid</p><p class=\"link\">Accept/Decline Financial Aid</p><p class=\"link\">Report Other Financial Aid</p><p class=\"link\">Payment Estimator</p></div><div class=\"vertSpacer\"></div><div class=\"row\"><div class=\"col-lg-8\"><div class=\"row\" id=\"dropdown\"><div class=\"col-lg-9\"><p class=\"box\">more links...</p></div><div class=\"col-lg-1\"><img class=\"arrow2\" src=\"arrow2.png\"></div></div></div><div class=\"col-lg-1\"><img src=\"go.png\"></div></div></div><div class=\"col-lg-8\">   <table class=\"notSchedule\"><tr class=\"notSchedule\"><th class=\"notSchedule\">Account Summary</th><th class=\"notSchedule\"></th></tr><tr class=\"notSchedule\"><td class=\"descriptor\">You owe 6,969.69</td><td class=\"link\">View Charges Due Date</td>  </tr><tr class=\"notSchedule\"><td class=\"vertSpacer\"></td><td class=\"vertSpacer\">/td></tr><tr class=\"notSchedule\"><th>Currency is US Dollars</th> <th></th></tr></table></div></div></div></div>'],
  'personalInfo':['<div id=\"personalInfo\"><div class=\"row\"><div class=\"col-lg-12\" id=\"box\"><h4 class=\"box\"><img src=\"arrow.png\">Personal Information</h4><div class=\"col-lg-4\"><div class=\"links\"><p class=\"link\">Names</p><p class=\"link\">Privacy Policy</p></div><div class=\"vertSpacer\"></div><div class=\"row\"><div class=\"col-lg-8\"><div class=\"row\" id=\"dropdown\"><div class=\"col-lg-9\"><p class=\"box\">more links...</p></div><div class=\"col-lg-1\"><img class=\"arrow2\" src=\"arrow2.png\"></div></div></div><div class=\"col-lg-1\"><img src=\"go.png\"></div></div></div><div class=\"col-lg-8\"><table class=\"notSchedule\"><tr class=\"notSchedule\"><th class=\"notSchedule\">Contact Information</th><th class=\"notSchedule\"></th></tr><tr class=\"notSchedule\"><td class=\"link\">Mailing Address</td><td class=\"link\">Billing Address</td></tr><tr class=\"notSchedule\"><td class=\"notSchedule\">1156 High St, Santa Cruz, CA 95064</td><td class=\"notSchedule\">None</td></tr><tr class=\"notSchedule\"><td class=\"link\">Cell Phone</td><td class=\"link\">Campus Email Address</td></tr><tr class=\"notSchedule\"><td class=\"notSchedule\">None</td><td class=\"notSchedule\">chancellor@ucsc.edu</td></tr></table></div></div></div></div>'],
  'academicsContent':['#academicsLinks#','<div class=\"vertSpacer\"></div>','<div class=\"row\"><div class=\"col-lg-8\"><div class=\"row\" id=\"dropdown\"><div class=\"col-lg-9\"><p class=\"box\">more links...</p></div><div class=\"col-lg-1\"><img class=\"arrow2\" src=\"arrow2.png\"></div></div></div><div class=\"col-lg-1\"><img src=\"go.png\"></div></div>','<div class=\"row\" id=\"dropdown\"><div class=\"col-lg-4\"><p>#academicsImg##academicsImgLabel#</p></div><div class=\"col-lg-3\"><p>#academicsImg##academicsImgLabel#</p></div></div>','<h5 class=\"box\">This Week\'s Schedule</h5>','<table class=\"schedule\"><tr class=\"schedule\"><th class=\"schedule\"></th><th class=\"schedule\">Class</th><th class=\"schedule\">Schedule</th></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr></table>','<p class=\"ender\">weekly schedule<img src=\"arrow3.png\"></p>','<p class=\"ender\">enrollment schedule<img src=\"arrow3.png\"></p>'],
  'academicsContentAmount':['#academicsContent# #academicsContent# #academicsContent#','#academicsContent# #academicsContent# #academicsContent# #academicsContent#'],
  'academicsColumns':['<div class=\"col-lg-4\">#academicsContentAmount#</div><div class=\"col-lg-8\">#academicsContentAmount#</div>','<div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-10\">#academicsContentAmount#</div>','<div class=\"col-lg-6\">#academicsContentAmount#</div><div class=\"col-lg-6\">#academicsContentAmount#</div>','<div class=\"col-lg-10\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div>','<div class=\"col-lg-8\">#academicsContentAmount#</div><div class=\"col-lg-4\">#academicsContentAmount#</div>','<div class=\"col-lg-4\">#academicsContentAmount#</div><div class=\"col-lg-4\">#academicsContentAmount#</div><div class=\"col-lg-4\">#academicsContentAmount#</div>','<div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div>','<div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div>','<div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div>'],
  'academicsLinks':['<div class=\"links\">#academicsLink# #academicsLink# #academicsLink# #academicsLink# #academicsLink# #academicsLink#</div>'],
  'academicsLinkContent':['Search','Plan','Enroll','Grades','My Academics','My Scheduler'],
  'academicsLink':['<p class=\"link\">#academicsLinkContent#</p>','<p class=\"bigLink\">#academicsLinkContent#</p>'],
  'academicsImg':['<img src=\"calendar.png\">','<img src=\"computerBook.png\">'],
  'academicsImgLabel':['URL','Deadlines'],
  'academicsClasses':['CMPM 148-01 LEC(22864)','CMPM 170-01 LEC(22917)','CMPM 170-01G DIS(22924)','CMPM 179-01 LEC(23812)','TIM 198F-01 IND(17347)'],
  'academicSched':['MoWeFr 4:00 PM - 5:05PM Merrill Acad 102','TuTh 3:20 PM - 4:55PM Kresge Clrm 321','Fr 10:40 AM - 11:45AM Soc Sci 2 137','MoWeFr 2:40 PM - 3:45PM Kresge Clrm 327','Room: TBA']
}

function htmlRedo(){
  let htmlGrammar = tracery.createGrammar(htmlRules);

  let rightColumn = document.getElementById('rightColumn');
  $('#rightColumn').empty();
  $("#rightColumn").append(htmlGrammar.flatten('#origin#'));
    
  let leftColumn = document.getElementById('leftColumn');
  $('#leftColumn').empty();
  $("#leftColumn").append(htmlGrammar.flatten('#origin#'));
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