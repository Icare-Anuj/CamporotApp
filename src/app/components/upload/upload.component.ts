import { Component, OnInit } from "@angular/core";
import { PropertyService } from "src/app/services/property.service";
import { PropertyModel } from "src/app/models/property.model";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
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
  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    if (
      localStorage.getItem("propertyToEdit") &&
      (localStorage.getItem("propertyToEdit") !== null ||
        localStorage.getItem("propertyToEdit") !== undefined)
    ) {
      this.isUpdate = true;
      this.propertyToEdit = JSON.parse(localStorage.getItem("propertyToEdit"));
      this.titulo = this.propertyToEdit.title;
      this.descripcion = this.propertyToEdit.description;
      this.tipo = this.propertyToEdit.kind;
      this.estado = this.propertyToEdit.state;
      this.precio = this.propertyToEdit.price;
      this.compra = this.propertyToEdit.sale;

      this.propertyQuery = new PropertyModel(
        this.titulo,
        this.descripcion,
        this.tipo,
        this.precio,
        this.estado,
        this.compra,
        this.propertyToEdit.property_id,
        this.propertyToEdit.images
      );
      console.log(this.propertyQuery);
    } else {
      this.isUpdate = false;
    }
  }

  handleChange = e => {
    this.propertyQuery[e.target.name] = e.target.value;
  };

  onSubmit(e) {
    e.preventDefault();
    const formData: any = new FormData();
    const fileInput = document.getElementById("files") as HTMLInputElement;
    if (fileInput.files.length == 0) {
      alert("Debe agregar imagenes")
      return  
    } else {
      for (var i = 0; i < fileInput.files.length; i++) {
        formData.append("files[]", fileInput.files[i], fileInput.files[i].name);
      }
    }

    const sale = this.propertyQuery["sale"] === "on" ? true : false;
    formData.append("title", this.propertyQuery["title"]);
    formData.append("description", this.propertyQuery["description"]);
    formData.append("kind", this.propertyQuery["kind"]);
    formData.append("state", this.propertyQuery["state"]);
    formData.append("price", this.propertyQuery["price"]);
    formData.append("sale", sale);

    const checkTitle = this.propertyQuery["title"] == null || this.propertyQuery["title"] == ''
    const checkDescription = this.propertyQuery["description"] == null || this.propertyQuery["description"] == ''
    const checkKind = this.propertyQuery["kind"] == null || this.propertyQuery["kind"] == ''
    const checkState = this.propertyQuery["state"] == null || this.propertyQuery["state"] == ''
    const checkPrice = this.propertyQuery["price"] == null || this.propertyQuery["price"] == ''

    if (checkTitle || checkDescription || checkKind || checkState || checkPrice) {
      alert('Por favor llene todos los campos')
      return
    } else {
      this.propertyService.createProperty(formData).subscribe(
        data => {
          if (data.success == true) {
            alert("Propiedad creada");
          } else {
            alert("Ha habido un error");
          }
        },
        error => {
          if (error.error.msg == "Token has expired") {
            alert("Necesitas iniciar sesion de nuevo");
            localStorage.removeItem("token");
            window.location.href = "/login";
          } else {
            alert("Error al crear propiedad, por favor trate de nuevo");
          }
        }
      );
    }
  }

  onUpdate(e) {
    e.preventDefault();
    const formData: any = new FormData();
    formData.append('property_id', this.propertyQuery['property_id'])

    const sale = this.propertyQuery["sale"] === "on" ? true : false;
    formData.append("title", this.propertyQuery["title"]);
    formData.append("description", this.propertyQuery["description"]);
    formData.append("kind", this.propertyQuery["kind"]);
    formData.append("state", this.propertyQuery["state"]);
    formData.append("price", this.propertyQuery["price"]);
    formData.append("sale", sale);

    this.propertyService.updateProperty(formData).subscribe(
      data => {
        if (data.success == true) {
          alert("Propiedad actualizada");
        } else {
          alert("Ha habido un error");
        }
      },
      error => {
        if (error.error.msg == "Token has expired") {
          alert("You need to login again");
          localStorage.removeItem("token");
          window.location.href = "/login";
        } else {
          alert("Error al actualizar propiedad, por favor trate de nuevo");
        }
      }
    );
  }
}
