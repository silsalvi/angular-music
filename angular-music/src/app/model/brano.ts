import { Artista } from "./artisti";
import { Genere } from "./generi";
export class Brano {
  id: number;
  nome: string;
  genere: Genere[];
  artisti: Artista[];
  dataUscita?: Date;
  descrizione?: string;
  path: string;
  copertina?: string;
}
