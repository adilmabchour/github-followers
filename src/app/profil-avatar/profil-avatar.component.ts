import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AvatarServiceService } from '../services/avatar-service.service';

@Component({
  selector: 'app-profil-avatar',
  templateUrl: './profil-avatar.component.html',
  styleUrls: ['./profil-avatar.component.css']
})
export class ProfilAvatarComponent implements OnInit {
  id : any;
  name : any;
  type : any;
  page : any;
  constructor(private route : ActivatedRoute, private service : AvatarServiceService){}

  ngOnInit() {
    this.id   = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.page = this.route.snapshot.queryParamMap.get('page');
    // this.route.paramMap.subscribe(
    //   params => {
    //     this.id = params.get('id');
    //     this.name = params.get('name');
    //   }
    // )

    // this.route.queryParamMap.subscribe(
    //   queryParamMap => {
    //     console.log(queryParamMap.get('type'));
    //     console.log(queryParamMap.get('page'));
    //   }
    // )
  }
}
