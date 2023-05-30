import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AvatarServiceService } from '../services/avatar-service.service';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  constructor(private service : AvatarServiceService){}
  avatars : any;
  ngOnInit() {
    this.getFollowers();
  }

  getFollowers(){
    this.service.getAll().subscribe(
      (reps) => {
        this.avatars = reps;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
