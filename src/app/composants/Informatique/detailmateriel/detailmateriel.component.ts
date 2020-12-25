import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'sai-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
  @Input("m") mat:Materiel;
  materiel:Materiel;


  constructor(private materielService:MaterielService) { }

  ngOnInit(): void {
    this.materiel=this.materielService.getMaterielById("2");
  }

}
