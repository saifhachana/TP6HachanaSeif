import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListmaterielComponent } from './composants/Informatique/listmateriel/listmateriel.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Error404Component } from './composants/error404/error404.component';
import { MenuComponent } from './composants/menu/menu.component';
import { CommentComponent } from './composants/commentaires/comment/comment.component';
import { MaterielComponent } from './composants/materiel/materiel.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListmaterielComponent,
    ContactComponent,
    Error404Component,
    MenuComponent,
    CommentComponent,
    MaterielComponent,
    DetailmaterielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
