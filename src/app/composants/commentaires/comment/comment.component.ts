import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaires';

@Component({
  selector: 'sai-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comm: Commentaire;
  @Input() indice: number;
  constructor() { }

  ngOnInit(): void {
  }

}
