import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  isActive = true;
  title = "La liste de mes cours";
  image  = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg";
  textSaisie : string = "hello adil";
  courses: string[];
  course = {
    titre : "Formation complet sur Angular",
    avis : "4.9762",
    participants : 136,
    prix : 950.50,
    publucationDate : new Date(2023, 3, 4)
  }

  constructor(private coursesService : CoursesService){
    this.courses = coursesService.getService();
  }

  getTitle(){
    return this.title;
  }

  onKeyUp(){
      console.log("angular key :", this.textSaisie);
  }

  changeIcon(){
    this.isActive = !this.isActive;
  }
}
