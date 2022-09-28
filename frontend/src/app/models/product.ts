export interface Product {
    id?:number;
    _id?:string;
    imageURL: string;
    name: string;
    catagory: string;
    brand: string;
    isTrending: boolean;
    unitPrice : number;
    stockAvailable: number;
  }