import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  property: any;
  images = [];
  constructor() { 
    this.property = JSON.parse(localStorage.getItem('property'));
    this.property.heating = this.property.heating ? "Si" : "No"
    this.property.furnished = this.property.furnished ? "Si" : "No"
    this.property.pets = this.property.pets ? "Si" : "No"
    this.property.equipped_kitchen = this.property.equipped_kitchen ? "Si" : "No"
    this.images = this.property.images;
  }

  ngOnInit() {

    console.log(this.property);
  }

}
