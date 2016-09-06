System.register(['angular2/core', './tweet.component', './love.component', './contact-form.component'], function(exports_1, context_1) {
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
    var core_1, tweet_component_1, love_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (love_component_1_1) {
                love_component_1 = love_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        lovers: 500,
                        author: "Preben",
                        text: "more will come later",
                        imgURL: "http://lorempixel.com/100/100/people"
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [tweet_component_1.TweetComponent, love_component_1.LoveComponent, contact_form_component_1.ContactFormComponent],
                        styles: ["\n             .fisk {\n                 height: 100%;\n                 width: 100%;\n                 background-image: url('http://lorempixel.com/1920/1100');\n                 background-attachment: fixed;\n                 background-color: red;\n                 }\n             \n    "],
                        template: "\n    <div class=\"fisk\">\n        <tweet [post]=\"post\" ></tweet>\n        <love [inLove]=\"true\" [lovers]=23></love>\n    </div>\n    <contact-form></contact-form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map