import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { FilterModel } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filterQuerys: FilterModel;
  priceMin: string;
  priceMax: string;
  amount: number;
  action: string;
  type: string;
  location: string;
  prices = [100000, 200000, 300000, 400000, 700000, 1000000]
  options = ['Vivienda', 'Obra nueva', 'Local y nave', 'Garaje', 'Oficina', 'Trastero', 'Edificio'];
  properties: PropertyModel[] = [
    {
      title: 'Casa de 120 m2 a la venta en Avenida de America',
      description: '3 cuartos y 2 baños',
      kind: 'Vivienda',
      price: 250000,
      state: 'Madrid',
      sale: true,
      property_id: '1',
      images: [],

    },
    {
      title: 'Piso tipo estudio ubicado en Republica Argentina',
      description: 'Cocina y espacios luminosos',
      kind: 'Vivienda',
      price: 320000,
      state: 'Madrid',
      sale: true,
      property_id: '2',
      images: []
    },
    {
      title: 'Piso en venta por razones familiares',
      description: 'Hermoso piso que tenemos necesidad de vender',
      kind: 'Vivienda',
      price: 180000,
      state: 'Madrid',
      sale: true,
      property_id: '3',
      images: []
    },
    {
      title: 'Piso frente a plaza España',
      description: '2 cuartos y 1 baño',
      kind: 'Vivienda',
      price: 210000,
      state: 'Madrid',
      sale: true,
      property_id: '4',
      images: []
    }
  ];
  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.amount = this.properties.length;
    for (let x = 0; x < this.properties.length; x++) {
      this.properties[x].priceToString = this.properties[x].price.toLocaleString();
    }
    this.action = JSON.parse(localStorage.getItem('action'));
    this.type = JSON.parse(localStorage.getItem('type'));
    this.location = JSON.parse(localStorage.getItem('location'));


    this.filterQuerys = new FilterModel();
    this.filterQuerys.action = this.action;
    this.filterQuerys.type = this.type;

    if (this.location === null) {
      this.location = 'Provincia, barrio, etc';
    } else {
      this.filterQuerys.location = this.location;
    }
    console.log(this.filterQuerys)
    this.priceMin = 'Precio desde';
    this.priceMax = 'Precio hasta';

  }


  priceMinSelected(price: string) {


    this.filterQuerys.price_min = parseFloat(price)
    console.log(this.filterQuerys);
    this.priceMin = price
    // this.priceMin = price.toString().concat('€');
  }

  priceMaxSelected(price: string) {
    this.filterQuerys.price_max = parseFloat(price)
    this.priceMax = price;
    console.log(this.filterQuerys);
  }

  filterApply() {
    let string = '';
    for (var val in this.filterQuerys) {
      if (this.filterQuerys[val] === undefined || this.filterQuerys[val] === null) {
      } else {
        string += ' ' + this.filterQuerys[val];
      }
    }
    console.log(string)

    // this.filterService.filter(string).subscribe(data =>{
    //  console.log(data);
    // });


    // localStorage.setItem('action', JSON.stringify(this.filterQuerys.action));
    // localStorage.setItem('type', JSON.stringify(this.filterQuerys.type));
    // localStorage.setItem('location', JSON.stringify(this.filterQuerys.location));

  }

  updateLocation = e => {
    this.filterQuerys.location = e.target.value;
    console.log(this.filterQuerys)
  }


}
