import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
//    {_id: "1", name: 'Angular', category: 'front-end'}];
  displayedColumns = ['name', 'category'];

  // courseService: CourseService;
  constructor(private coursesService: CoursesService) { }
  // this.courses = [];
  // this.coursesService = new CourseService();

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
