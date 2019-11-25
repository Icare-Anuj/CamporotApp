import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyModel } from 'src/app/models/property.model';
import { FilterModel } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Router } from '@angular/router';

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
  prices = [100000, 200000, 300000, 400000, 700000, 1000000];
  options = ['Vivienda', 'Piso', 'Edificio', 'Terreno'];
  noValues = false;
  properties: PropertyModel[];
  constructor(private filterService: FilterService, private dataStorageService: DataStorageService, private router: Router) { }

  ngOnInit() {
    this.properties = this.dataStorageService.filterQuerys;
    console.log(this.properties);
    if((this.properties && this.properties !== undefined )|| ( this.properties && this.properties !== null)) {
      this.amount = this.properties.length;
      for (let x = 0; x < this.properties.length; x++) {
        this.properties[x].priceToString = this.properties[x].price.toLocaleString();
        // const image =this. properties[x].images.length > 0 ? this.properties[x].images[0].path : require("../../../assets/img/logo.jpg")
      }
    } else {
      this.noValues = true;
    }

    this.action = JSON.parse(localStorage.getItem('action'));

    this.type = JSON.parse(localStorage.getItem('type'));
    this.location = JSON.parse(localStorage.getItem('location'));


    this.filterQuerys = new FilterModel();
    this.filterQuerys.action = this.action;
    this.filterQuerys.type = this.type;
    if(this.action === 'Comprar') {
      this.filterQuerys.sale = true;
    }else {
      this.filterQuerys.sale = false;
    }

    if (this.location === null || this.location === undefined)  {
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

  actionSelected(action: string) {
    this.filterQuerys.action = action;
    this.action = action;
    if(this.action === 'Comprar') {
      this.filterQuerys.sale = true;
    }else {
      this.filterQuerys.sale = false;
    }
    console.log(this.filterQuerys);
  }

  kindSelected(kind: string) {
    this.filterQuerys.type = kind;
    this.type = kind;
    console.log(this.filterQuerys);
  }

  filterApply() {

    this.filterService.filter(this.filterQuerys).subscribe(data =>{
     this.properties = data;
     this.dataStorageService.filterQuerys = this.properties;
     if(data.length > 1) {
      for (let x = 0; x < this.properties.length; x++) {
        this.properties[x].priceToString = this.properties[x].price.toLocaleString();
        this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/list']))
      }
     } else {
      this.noValues = true;
     }

    }, 
      error => {
        this.noValues = true;
      });


    // localStorage.setItem('action', JSON.stringify(this.filterQuerys.action));
    // localStorage.setItem('type', JSON.stringify(this.filterQuerys.type));
    // localStorage.setItem('location', JSON.stringify(this.filterQuerys.location));

  }

  updateLocation = e => {
    this.filterQuerys.location = e.target.value;
    console.log(this.filterQuerys)
  }

  truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }

  goToDetail(property: PropertyModel) {
    localStorage.setItem('property', JSON.stringify(property));
    this.router.navigate(['/detail']);
  }


}
