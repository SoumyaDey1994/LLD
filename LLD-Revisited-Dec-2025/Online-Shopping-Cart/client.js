// Example Usage:
const Inventory = require("./inventory");
const ShoppingCart = require("./shoppingCart");
const Product = require("./product");
// const Checkout = require("./checkout");
const CartItem = require("./cartItem");

// Create inventory
const inventory = new Inventory();
inventory.addProduct(new Product(1, "Laptop", 1000, 5));
inventory.addProduct(new Product(2, "Phone", 500, 10));
inventory.addProduct(new Product(3, "Headphones", 100, 15));

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
for (const product of inventory.inventory.values()) {
  console.log(`${product.name}: ${product.stock} units available`);
}
