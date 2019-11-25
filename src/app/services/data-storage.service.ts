import { Injectable } from '@angular/core';
import { FilterModel } from '../models/filter.model';
import { PropertyModel } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

 filterQuerys: PropertyModel[];
  constructor() { }
}
