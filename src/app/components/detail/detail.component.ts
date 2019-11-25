import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  property: PropertyModel;
  images = [];
  constructor() { 
    this.property = JSON.parse(localStorage.getItem('property'));
    this.images = this.property.images;
  }

  ngOnInit() {

    console.log(this.property);
  }

}
