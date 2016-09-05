System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoveComponent = (function () {
                function LoveComponent() {
                    this.inLove = false;
                    this.lovers = 0;
                }
                LoveComponent.prototype.cupidStrike = function () {
                    this.lovers = this.inLove ? this.lovers = this.lovers - 1 : this.lovers = this.lovers + 1;
                    this.inLove = !this.inLove;
                };
                LoveComponent = __decorate([
                    core_1.Component({
                        selector: 'love',
                        template: "\n        <i\n        class=\"glyphicon glyphicon-heart\"\n        [class.liked] = \"inLove\"\n        (click)=\"cupidStrike()\"> </i>\n        <span class=\"amountOfLovers\"> {{lovers}} </span>\n    ",
                        styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n        .liked {\n        color: deeppink;\n        }\n    "],
                        inputs: ['inLove', 'lovers']
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoveComponent);
                return LoveComponent;
            }());
            exports_1("LoveComponent", LoveComponent);
        }
    }
});
//# sourceMappingURL=love.component.js.map