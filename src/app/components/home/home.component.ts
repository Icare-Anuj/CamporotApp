import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { FilterModel } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = ['Vivienda', 'Piso', 'Edificio', 'Terreno'];
  selected = 'Vivienda';
  parameters: any;
  filter: FilterModel;
  aux:any;
  inputValue = '';
  isLoading = false;

  constructor(
    private _router: Router,
    private filterService: FilterService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.filter = new FilterModel()
    this.filter.action = 'Comprar';
    this.filter.sale = true;
    this.filter.type = this.selected;
  
  }

  openOption(evt, cityName) {
    // Declare all variables
    var i, tablinks;

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    // document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " active";
    let selected = document.getElementById(cityName).style.display = "block"
    evt.currentTarget.className += " active";

  }

  chooseType(option) {
    this.selected = option;
    this.filter.type = option;
  }

  setAction(option: string) {
  
    this.filter.action = option;
    if(option === 'Comprar') {
      this.filter.sale = true;
    } else {
      this.filter.sale = false;
    }

  }

  handleChange = e => {

    this.filter.location = e.target.value;
}
  

  async submit() {


    localStorage.setItem('action', this.filter.action);
    localStorage.setItem('type', this.filter.type);
    localStorage.setItem('location', this.filter.location);
    this.isLoading = true;

     this.filterService.filter(this.filter).subscribe(data =>{
       this.isLoading = false;
       console.warn(data)
        // localStorage.setItem('searchResult', data)
        this.dataStorageService.filterQuerys = data;
        this._router.navigate(['/list']);
      }
    )


    
  }
}
