import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: {}[] = [];
  recetaTitulo: string;
  recetaDesc: string;
  recetaURL: string;

  constructor() { }

  ngOnInit() {
  }

  capturarTitulo(evt){
    this.recetaTitulo = evt;
  }
  capturarDesc(evt){
    this.recetaDesc = evt;
  }
  capturarURL(evt){
    this.recetaURL = evt;
  }

  agregarReceta(){
    
    if (this.recetaTitulo && this.recetaTitulo.trim() != "" && this.recetaDesc && this.recetaDesc.trim() != "") {
      const receta = {titulo: this.recetaTitulo, descripcion: this.recetaDesc, url: this.recetaURL};
      this.recetas.push(receta);
    }

    //Limpiar
    this.recetaTitulo = "";
    this.recetaDesc = "";
    this.recetaURL = "";

  }

}
