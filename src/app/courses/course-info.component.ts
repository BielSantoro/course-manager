import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {
  course:Course;
  constructor(private activateRoute:ActivatedRoute, private CourseService: CourseService){}
  ngOnInit():void{
    this.course= this.CourseService.retriveById(+this.activateRoute.snapshot.paramMap.get('id'));
  }
  save():void{
    this.CourseService.save(this.course);
  }
}
