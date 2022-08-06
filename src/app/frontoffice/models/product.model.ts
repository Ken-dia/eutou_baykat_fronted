export class ProductModel {
  constructor(
    public _id: string,
    public libelle: string,
    public description: string,
    public user: { _id: string; nom: string; premon: string },
    public images: [
      {
        _id: string;
        url: string;
      }
    ],
    public prixes: [
      {
        valeur: Number;
        debut: Number;
        fin: Number;
        unite: {
          libelle: string;
        };
      }
    ],
    public categories: [
      {
        _id: string;
        libelle: string;
      }
    ],
    public createdAt: string,
    public quantite: Number
  ) {}
}
