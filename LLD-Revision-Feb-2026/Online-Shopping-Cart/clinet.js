// Example Usage:
import { Product } from "./Product.js";
import { Inventory } from "./Inventory.js";
import { ShoppingCart } from "./ShoppingCart.js";
import { CartItem } from "./CartItem.js";
import { Payment } from "./Payment.js";

// Create inventory
const inventory = new Inventory();
inventory.addProduct(new Product(1, "Laptop", 5, 1000));
inventory.addProduct(new Product(2, "Phone", 10, 500));
inventory.addProduct(new Product(3, "Headphones", 15, 100));

// Create shopping cart
const cart = new ShoppingCart(inventory);

const cartItem1 = new CartItem(inventory.getProductById(1), 1); // 1 Laptop
const cartItem2 = new CartItem(inventory.getProductById(2), 2); // 2 Phones
const cartItem3 = new CartItem(inventory.getProductById(3), 3); // 3 Headphones

// Add products to the cart
cart.addItem(cartItem1); // 1 Laptop
cart.addItem(cartItem2); // 2 Phones
cart.addItem(cartItem3); // 3 Headphones

// Display cart
cart.displayCart();

// Modify cart items
cart.setQuantity(3, 2); // Change quantity of headphones to 2

// Display updated cart
cart.displayCart();

// Checkout process
// const checkout = new Checkout(inventory, cart);
// checkout.processCheckout(); // Successful if inventory is available

// Display updated inventory after checkout
console.log("Updated Inventory:");
for (const product of inventory.products.values()) {
  console.log(`${product.name}: ${product.stockQty} units available`);
}
