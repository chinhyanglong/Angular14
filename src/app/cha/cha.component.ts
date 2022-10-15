import { Component, OnInit, ViewChild } from '@angular/core';
import { ConCComponent } from '../conc/conc.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage = '123';
  @ViewChild('thangTeo') thangTeo : ConCComponent | undefined;
  @ViewChild('thangTy') thangTy : ConCComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public conGoi(name :string) : void{
    this.chaMessage = 'chao con' + name;
    console.log('chao con');
  }
  public choTien() {
    this.thangTeo?.choTien(10);
    this.thangTy?.choTien(100);
  }

}
