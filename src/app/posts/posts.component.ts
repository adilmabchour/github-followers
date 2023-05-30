import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  status:boolean = true;
  minDate:string = "09:00";
  maxDate:string = "16:00";
  post={
    id : 0,
    title : '',
    body : '',
    userId: '',
    time: ''
  }
  constructor(private postService: PostService){}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
      this.postService.getAll()
      .subscribe((rsp) => {
        this.posts = rsp;
      },error =>{
        console.log(error);
      });
  }
  addPost(){
    this.postService.add(this.post)
    .subscribe((rsp:any) => {
      this.post.id = rsp.id;
      this.posts.unshift(this.post);
      this.post={
        id : 0,
        title : '',
        body : '',
        userId: '',
        time: ''
      }
    },error =>{
      console.log(error);
    })
  }
  editPost(post:any){
    this.post = post;
    this.status = false;
  }

  updatePost(){
    this.postService.update(this.post)
        .subscribe(resp => {
          this.post = {
            id : 0,
            title : '',
            body : '',
            userId: '',
            time: ''
          }
        },error =>{
          console.log(error);
        });
        this.status = true;
  }

  deletePost(post:any){
    this.postService.delete(post.id)
    .subscribe(
      resp => {
        console.log(resp);
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      },
      err =>{
        console.log(err);
    });
  }
}
