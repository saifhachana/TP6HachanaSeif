import { Commentaire } from './commentaires';

export class Materiel {
    id:string; 
    libelle:string; 
    photo: string; 
    marque: string; 
    prix: number; 
    description: string; 
    hautGamme: boolean; 
    quantite: number; 
    commentaires: Commentaire[];
}
