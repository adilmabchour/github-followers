import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    @Input() isFavorite : boolean = false;
    @Output() change = new EventEmitter();

    changeIcon(){
      //this.isFavorite = !this.isFavorite;
      this.change.emit({isFavorite : this.isFavorite});
    }
}
