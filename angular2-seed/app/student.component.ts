import {Component} from 'angular2/core'
import {StudentService} from './student.service'


@Component({
    selector: 'students',
    template: `
    <h2>Studerende</h2>
    {{ navn }}
    <ul>
        <li *ngFor="#amount of students">
        {{ amount }}
        </li>
    </ul>
    `,
    providers: [StudentService]
})

export class StudentComponent {
    navn = "Name of the student";
    students;

    constructor(studentService: StudentService) {
        this.students = studentService.getStudents();
    }
}