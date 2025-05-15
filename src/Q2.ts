abstract class Products {
    constructor(
        public name: string,
        public productType: string,
        public purchaseday: string,
        public price: string, 
    ){}

    abstract getProduct(): string;
}

class ElectronicProducts extends Products {
    constructor(name: string, price: number, public warranty: number) {
        super(name, "Electronic", new Date().toISOString().split('T')[0], price.toString());
    }

    getProduct(): string {
        return "Electronic";
    }
}

class ClothingProduct extends Products {
    constructor(name: string, price: number, public size: string) {
        super(name, "Clothing", new Date().toISOString().split('T')[0], price.toString());
    }

    getProduct(): string {
        return "Clothing";
    }
}

class FurnitureProduct extends Products {
    constructor(name: string, price: number, public material: string) {
        super(name, "Furniture", new Date().toISOString().split('T')[0], price.toString());
    }

    getProduct(): string {
        return "Furniture";
    }
}

class User {
    constructor(public name: string, public email:string, public roleOfMember: string, protected password:string){ }

    handleLogin(email: string, password: string): boolean {
        if (this.email === email && this.password === password) {
            console.log("Login successful");
            return true;
        } else {
            console.log("Invalid email or password");
            return false;
        }
    }
}

class Admin extends User{
    
}
class Seller extends User{

}
class Customer extends User{

}

// Encapsulation of cart/ checkout logic
class Order extends Products {
    constructor(
        name: string,
        productType: string,
        purchaseday: string,
        price: string,
        public shippingDate: Date,
        public orderingDate: Date,
        public orderStatus: string,
        private discountRate: number,
        private cost: number,
        public paid: boolean
        
    ){
        super(name, productType, purchaseday, price);
    }

    getProduct(): string {
        return `Order: ${this.name}, Type: ${this.productType}, Purchased: ${this.purchaseday}, Price: $${this.price}`;
    }

    calculateTax(): number{
        const tax = 0.16
        const taxedAmount = this.cost * tax
        return taxedAmount
    }
    calculateDiscount(): number{
        const discountedAmnt = 0.01 * this.discountRate
        return discountedAmnt
    }
}

class Cart {
    private userProducts: Products[] = []

    constructor(
        public productStatus: string,
        public userId: number,
    ){}

    totalProducts(): number{
        return this.userProducts.length;

    }
}

interface OrderItems{
    checkout(item: Order): string;
    shippingItem(item: Order, shippingDate: Date ): void;
    
}

class BuyStuff extends Order implements OrderItems{
    checkout(item: Order): string {
        if (item.paid === true){
            item.orderStatus = "Complete"
        }
        else{
            item.orderStatus = "Pending"
        }
        return item.orderStatus
    }
    shippingItem(item: Order, _shippingDate: Date): string {
        return `${item.productType} ${_shippingDate.toISOString()}`
    }
}

// Example Usage
const electronicProduct = new ElectronicProducts("Laptop", 1200, 2);
const clothingProduct = new ClothingProduct("T-shirt", 20, "M");
const furnitureProduct = new FurnitureProduct("Sofa", 500, "Leather");
const order = new Order("Laptop", "Electronic", new Date().toISOString(), "1200", new Date(), new Date(), "Pending", 10, 1200, true);
const cart = new Cart("Pending", 1);
const buyStuff = new BuyStuff("Laptop", "Electronic", new Date().toISOString(), "1200", new Date(), new Date(), "Pending", 10, 1200, true);


// Polymorphism 
interface Payment {
    processPayment(amount: number): void;
}

class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of ${amount}`);
    }
}

class BankTransferPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing bank transfer payment of ${amount}`);
    }
}

// Use polymorphism to handle payments
function makePayment(payment: Payment, amount: number): void {
    payment.processPayment(amount);
}

// Example usage
const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const bankTransferPayment = new BankTransferPayment();

// makePayment(creditCardPayment, 100);
// makePayment(payPalPayment, 200);
// makePayment(bankTransferPayment, 300);


