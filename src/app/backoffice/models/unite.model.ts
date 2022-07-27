export class Unite {
  _id!: string;
  libelle: string;
  type: string;

  constructor(libelle: string, type: string){
    this.libelle = libelle;
    this.type = type;
  }
}
