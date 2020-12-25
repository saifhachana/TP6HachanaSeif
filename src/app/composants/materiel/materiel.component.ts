import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'sai-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input("m") mat:Materiel;

  constructor(private router:Router) { }
  Details(){}

  ngOnInit(): void {
  }

}
