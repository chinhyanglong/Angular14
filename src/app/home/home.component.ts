import { Component, OnInit } from '@angular/core';

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
  public districts : string[] = ['Quan huyen'];
  public cities = [{city :'Chon thanh pho', district : ['Quan huyen']},
    {city :'An Giang', district : ['Châu đốc', "Long Xuyen", "Tri Ton"]},
  {city :'Vung Tau', district : ['Baf Ria', "Vung Tau", "Tri Ton"]}]
  constructor() { }

  public ngOnInit(): void {
    this.fruit;
    console.log(this.cities);
  }
  public changeCity(event: any) : void {
    const city = event.target.value;
    // const search = this.cities.filter(data => data.city === city);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }
    this.districts = this.cities.find(p=>p.city == city)?.district || [];
  }
}
