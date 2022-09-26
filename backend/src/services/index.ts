import { Application } from '../declarations';
import users from './users/users.service';
import cartProducts from './cart-products/cart-products.service';
import orderProducts from './order-products/order-products.service';
import products from './products/products.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(cartProducts);
  app.configure(orderProducts);
  app.configure(products);
}
