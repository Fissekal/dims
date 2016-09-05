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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.myVote = 0;
                    this.votes = 0;
                }
                VoteComponent.prototype.upGoesTrump = function () {
                    if (this.myVote < 1) {
                        this.myVote++;
                        this.votes++;
                        console.log(this.myVote);
                    }
                };
                VoteComponent.prototype.downGoesTrump = function () {
                    if (this.myVote > -1) {
                        this.myVote--;
                        this.votes--;
                        console.log(this.myVote);
                    }
                };
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'trump',
                        templateUrl: 'app/vote.template.html',
                        styles: ["\n    .wwThree {\n        width: 23;\n        text-align: center;\n        color: #ccc;\n    }\n        .arrow {\n            cursor: pointer;\n        }\n        .voted {\n            color: orange;\n        }\n    "],
                        inputs: ['votes']
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map