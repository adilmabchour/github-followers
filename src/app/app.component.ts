import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectTest';
  valeur : number = 0;
  isFavorite : boolean = false;
  body  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
  viewCourse = "angular";
  courses : any;

  trackCourse(index : number, course: any){
    return course ? course.id : undefined;
  };

  loadCourses(){
    this.courses = [
      {id : 1, title : "Angular"},
      {id : 2, title : "React"},
      {id : 3, title : "VueJs"},
      {id : 4, title : "Symfony"}
    ];
  };

  onFavoriteChanged(args : any){
    this.isFavorite = !args.isFavorite;
    console.log('Favorite changed', args.isFavorite);
  };

  addNumber(args : any){
    console.log(args.val)
    this.valeur += args.val;
  }

  addCourse(){
    this.courses.push({id:5, title : "React Native"});
  };

  deleteCourse(i:number){
    this.courses.splice(i, 1);
  };

  updateCourse(course:any){
    course.title = "Update";
  };
}
