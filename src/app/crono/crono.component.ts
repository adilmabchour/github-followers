import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent {
  @Input("valAffiche") valeur : number = 0;
  @Output("change") change = new EventEmitter();

  addNumber(val:number){
    //this.valeur += val;
    this.change.emit({val : val});
  }
}
