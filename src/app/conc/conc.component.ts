import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-con',
  templateUrl: './conc.component.html',
  styleUrls: ['./conc.component.scss']
})
export class ConCComponent implements OnInit {
  // public name = "Tèo";
  @Input() name: string = '';
  @Output() conGoi: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public goiCha(): void{
    console.log('goi cha');
    this.conGoi.emit(this.name);
  }
  public choTien(amount: number){
    console.log('con la ' +this.name + '. Cam on cha cho con ' + amount + 'vnd',)
  }

}
