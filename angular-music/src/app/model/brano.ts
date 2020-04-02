import { Artista } from "./artisti";
import { Genere } from "./generi";
export class Brano {
  nome: string;
  genere: Genere[];
  durata: number;
  artisti: Artista[];
  dataUscita: Date;
  descrizione?: string;
}
