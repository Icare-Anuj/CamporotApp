import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  propertyQuery: any = {};

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }


  handleChange = e => {
    this.propertyQuery[e.target.name] = e.target.value
  }

  onSubmit(e) {
    e.preventDefault()
    const formData: any = new FormData()
    const fileInput = document.getElementById('files') as HTMLInputElement;
    const allFiles = []
    for (var i=0; i<fileInput.files.length; i++) {
      allFiles.push(fileInput.files[i])
    }

    const sale = this.propertyQuery['compra'] === "on" ? true : false
    formData.append('title', this.propertyQuery['titulo'])
    formData.append('description', this.propertyQuery['descripcion'])
    formData.append('kind', this.propertyQuery['tipo'])
    formData.append('state', this.propertyQuery['estado'])
    formData.append('price', this.propertyQuery['precio'])
    formData.append('sale', sale)
    formData.append('files[]', allFiles)

    this.propertyService.createProperty(formData).subscribe(data => {
      console.log(data)
        if (data.success == true) {

      }
    })
  }
}
