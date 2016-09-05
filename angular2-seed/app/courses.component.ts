import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './autogrow.directive'

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{ title }}
    <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    
    
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "The title of courses page";
    courses;
    isActive:boolean;
    isFavorite = false;
    onDims() {
        this.isFavorite = !this.isFavorite;
    }
    onClick() {
        if(this.isActive) {
        this.isActive = false;
    }else{
        this.isActive = true;
}
    }

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}