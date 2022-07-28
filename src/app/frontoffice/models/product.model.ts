export class ProductModel {
  constructor(
    public _id: string,
    public description: string,
    public user: { _id: string },
    public images: [
      {
        url: string;
      }
    ],
    public categories: []
  ) {}
}
