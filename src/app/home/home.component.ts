import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private route : Router){}

  ngOnInit(): void {

  }

  ajouter(){
    this.route.navigate(['avatar', 124, 'adil'], {
      queryParams : {page : 1, type : 'admin'}
    })
  }
}
