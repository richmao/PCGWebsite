$( document ).ready(function() {
    let myRules = {
        'origin': '#color# #size#',
        'color': ['red', 'green'],
        'size': ['big', 'small']
    }
    let myGrammar = tracery.createGrammar(myRules);
    let tags = ["h4", "p", "h5", "tr", "td", "th"];
    tags.forEach(function(tag) {
        $(tag).addClass(myGrammar.flatten("#origin#"));
    });
});
