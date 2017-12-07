$( document ).ready(function() {
    var listOfClasses = ["red", "green"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length);
    $("h4").addClass(listOfClasses[randomNum]);
});
