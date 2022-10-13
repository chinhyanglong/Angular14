import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Huy";
  public age = 15;
  public fruit = ['Táo','Nho', 'Cam'];
  public fruit2 = [{ten: 'Tao', gia: 12, haGia: false},
                  {ten: 'Nho', gia: 13, haGia: false},
                  {ten: 'Cam', gia: -15, haGia: true}
                  ];
public counter = 0;
public counterBinhPhuong = 0;
  constructor(private common: CommonService) { }

  public ngOnInit(): void {
    this.fruit;
    this.counter = this.common.getCounter();
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

}
