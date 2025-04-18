/**
 * This design pattern provides a simplified interface to a complex subsystem, 
 * hiding the complexities and interactions between multiple classes or services. 
 * The purpose is to offer a unified, simpler API to the client.
 */

class ProductInfo {
    getDetails(productId) {
        return {
            id: productId,
            name: 'Smartphone',
            description: 'A new-edge smartphone for smart people'
        }
    }
}

class ProductPrice {
    getPrice(productId) {
        return {
            id: productId,
            amount: 10000,
            currency: 'INR'
        }
    }
}

class ProductStock {
    getStockCount(productId) {
        return {
            id: productId,
            stock: 10
        }
    }
}

class ProductRatings {
    getRating(productId) {
        return {
            id: productId,
            rating: 4.5,
            outOf: 5
        }
    }
}

class ProductFacade {
    constructor() {
        this.info = new ProductInfo();
        this.price = new ProductPrice();
        this.stock = new ProductStock();
        this.rating = new ProductRatings();
    }

    getProductDetails(productId) {
        const priceData = this.price.getPrice(productId);
        return {
            ...this.info.getDetails(productId),
            price: `${priceData.currency} ${priceData.amount}`,
            rating: this.rating.getRating(productId).rating,
            availabilityStatus: this.stock.getStockCount(productId).stock === 0 ? 'Out of Stock' : 'Available'
        }
    }
}

const facade = new ProductFacade();
const details = facade.getProductDetails('P123');

console.log("Product Details: ", details);
