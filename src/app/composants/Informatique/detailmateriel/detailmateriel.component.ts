import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'sai-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
 id:string;
  materiel:Materiel;


  constructor(private materielService:MaterielService,private activatedRoute:ActivatedRoute,private router:Router) { }
ident:string;
Return(){
  this.router.navigate(['/Informatique']);
}
  ngOnInit(): void {
this.ident=this.activatedRoute.snapshot.params['id'];
    this.materiel=this.materielService.getMaterielById(this.ident);
  }

}
