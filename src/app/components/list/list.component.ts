import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  amount: number;
  action: string;
  type: string;
  options = ['Vivienda', 'Obra nueva', 'Local y nave', 'Garaje', 'Oficina', 'Trastero', 'Edificio'];
  properties: PropertyModel[] = [
    {
      title: 'Casa de 120 m2 a la venta en Avenida de America',
      description: '3 cuartos y 2 baños',
      kind: 'Vivienda',
      price: 250000,
      state: 'Madrid',
      sale: true,
      property_id : '1',
      images: [],
    
    },
    {
      title: 'Piso tipo estudio ubicado en Republica Argentina',
      description: 'Cocina y espacios luminosos',
      kind: 'Vivienda',
      price: 320000,
      state: 'Madrid',
      sale: true,
      property_id : '2',
      images: []
    },
    {
      title: 'Piso en venta por razones familiares',
      description: 'Hermoso piso que tenemos necesidad de vender',
      kind: 'Vivienda',
      price: 180000,
      state: 'Madrid',
      sale: true,
      property_id : '3',
      images: []
    },
    {
      title: 'Piso frente a plaza España',
      description: '2 cuartos y 1 baño',
      kind: 'Vivienda',
      price: 210000,
      state: 'Madrid',
      sale: true,
      property_id : '4',
      images: []
    }
  ];
  constructor() { }

  ngOnInit() {
     this.amount = this.properties.length;
     for(let x= 0; x < this.properties.length; x++) {
       this.properties[x].priceToString = this.properties[x].price.toLocaleString();
     }
     this.action = JSON.parse(localStorage.getItem('action'));
     this.type = JSON.parse(localStorage.getItem('type'));

  }

}
