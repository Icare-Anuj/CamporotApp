import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { FilterModel } from 'src/app/models/filter.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = ['Vivienda', 'Obra nueva', 'Local y nave', 'Garaje', 'Oficina', 'Trastero', 'Edificio'];
  selected = 'Vivienda';
  parameters: any;
  filter: FilterModel;
  aux:any;
  inputValue = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.filter = new FilterModel()
    this.filter.action = 'Comprar';
    this.filter.type = this.selected
  
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
    console.log(this.filter)
  }

  handleChange = e => {

    this.filter.location = e.target.value;

    console.log(this.filter)
}
  

  submit() {
    let string = '';
    for(var val in this.filter) {
      if(this.filter[val] === undefined || this.filter[val] === null) {
      } else {
        string += ' '+this.filter[val];
      }
    }

    localStorage.setItem('action', JSON.stringify(this.filter.action));
    localStorage.setItem('type', JSON.stringify(this.filter.type));
    localStorage.setItem('location', JSON.stringify(this.filter.location));


    // this.filterService.filter(string).subscribe(data =>{
    //  console.log(data);
    // });

    this._router.navigate(['/list']);
    
  }
}
