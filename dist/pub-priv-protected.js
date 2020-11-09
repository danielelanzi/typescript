"use strict";
//classes: public, protected, private
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lesson = /** @class */ (function () {
    function Lesson(type, length, title, description) {
        //privata si può vedere solo all'interno della classe stessa
        this.instaces = 0;
        this.type = type;
        this.length = length;
        this.title = title;
        this.description = description;
        this.instaces++;
        this.incInstaces();
    }
    //metodo privato
    Lesson.prototype.incInstaces = function () {
        this.instaces++;
    };
    //metodo per poter accedere all'instanze private
    Lesson.prototype.getInstaces = function () {
        return this.instaces;
    };
    return Lesson;
}());
var VideoLesson = /** @class */ (function (_super) {
    __extends(VideoLesson, _super);
    function VideoLesson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoLesson.prototype.setDescription = function (desc) {
        this.description = desc;
    };
    return VideoLesson;
}(Lesson));
var lesson = new Lesson('Video Corso', 4, 'Intro', '');
// lesson.description='Descrizione del mio corso'
// console.log(lesson.description);
console.log(lesson.getInstaces());
