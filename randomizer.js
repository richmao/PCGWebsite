var app = function() {
    self.initialize = function () {
        console.log('initialize');
    };

    self.reset = function() {
        console.log('reset');
    };

    self.randomColor = function() {
        var colors = ["red", "green", "blue"];
        var random = Math.floor(Math.random() * colors.length);
        console.log('color chosen: ' + colors[random]);
        return colors[random];
    }

    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            styleObject: {
                color: randomColor()
            }
        },
        methods: {
            reset: self.reset,
            randomColor: self.randomColor
        }

    });

    self.reset();

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){
    APP = app();
    APP.initialize();
});
