import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { PropertyModel } from 'src/app/models/property.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  propertyQuery: any = {}; 
  // propertyQuery: any = {};
  titulo: string;
  descripcion: string;
  tipo: string;
  estado: string;
  precio: number;
  compra: boolean;
  propertyToEdit: PropertyModel;
  isUpdate: boolean;
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    if(localStorage.getItem('propertyToEdit') && (localStorage.getItem('propertyToEdit') !== null || localStorage.getItem('propertyToEdit') !== undefined )) {
      this.isUpdate = true;
      this.propertyToEdit = JSON.parse(localStorage.getItem('propertyToEdit'));
      this.titulo = this.propertyToEdit.title;
      this.descripcion = this.propertyToEdit.description;
      this.tipo = this.propertyToEdit.kind;
      this.estado = this.propertyToEdit.state;
      this.precio = this.propertyToEdit.price;
      this.compra = this.propertyToEdit.sale;

      console.log(this.precio)
      this.propertyQuery = new PropertyModel(this.titulo, this.descripcion, this.tipo, this.precio, this.estado, this.compra,this.propertyToEdit.property_id, this.propertyToEdit.images)
      console.log(this.propertyQuery)
    } else {
      this.isUpdate = false;
    }
  }


  handleChange = e => {
    this.propertyQuery[e.target.name] = e.target.value
    console.log(this.propertyQuery);

  }

  onSubmit(e) {
    e.preventDefault()
    const formData: any = new FormData()
    const fileInput = document.getElementById('files') as HTMLInputElement;
    const allFiles = []
    for (var i=0; i<fileInput.files.length; i++) {
      allFiles.push(fileInput.files[i])
    }
    formData.append('files[]', allFiles)

    const sale = this.propertyQuery['compra'] === "on" ? true : false
    formData.append('title', this.propertyQuery['titulo'])
    formData.append('description', this.propertyQuery['descripcion'])
    formData.append('kind', this.propertyQuery['tipo'])
    formData.append('state', this.propertyQuery['estado'])
    formData.append('price', this.propertyQuery['precio'])
    formData.append('sale', sale)

    this.propertyService.createProperty(formData).subscribe(data => {
      console.log(data)
        if (data.success == true) {
          
      }
    })
  }

  onUpdate(e) {
    e.preventDefault()
    const formData: any = new FormData()
    const fileInput = document.getElementById('files') as HTMLInputElement;
    const allFiles = []
    for (var i=0; i<fileInput.files.length; i++) {
      allFiles.push(fileInput.files[i])
    }


    console.log(this.propertyQuery)
    formData.append('title', this.propertyQuery['titulo'])
    formData.append('description', this.propertyQuery['descripcion'])
    formData.append('kind', this.propertyQuery['tipo'])
    formData.append('state', this.propertyQuery['estado'])
    formData.append('price', this.propertyQuery['precio'])
    formData.append('sale', this.propertyQuery['compra'])
    formData.append('files[]', allFiles)

    console.warn(formData)

    this.propertyService.updateProperty(formData).subscribe(data => {
      console.log(data)
        if (data.success == true) {

      }
    })
  }
}
