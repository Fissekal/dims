System.register(['angular2/core', './love.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, love_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (love_component_1_1) {
                love_component_1 = love_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        styles: ["\n             .myTweet {\n                 background-color: white;\n                 width:300;\n                 height: 100;\n             }\n    "],
                        template: "\n    <div class=\"myTweet\">\n    <img src={{post.imgURL}} align=\"left\"> {{post.author}}<br> {{post.text}}<br>\n    <love [inLove] = \"post.inLove\" [lovers] = \"post.lovers\"></love><br></div>\n    ",
                        directives: [love_component_1.LoveComponent],
                        inputs: ['post']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map