export interface OrderProduct {
    id: number; //basically product.id === this.id
    userID: number;
    imageURL: string;
    name: string;
    unitPrice : number;
    quantity: number;
    brand: string;
    subtotal: number;
  }