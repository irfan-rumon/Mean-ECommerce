export interface CartProduct {
    id: number; //basically product.id === this.id
    imageURL: string;
    name: string;
    unitPrice : number;
    quantity: number;
    brand: string;
    subtotal: number;
  }