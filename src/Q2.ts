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
        return `Electronic: ${this.name}, Warranty: ${this.warranty} year(s), Price: $${this.price}`;
    }

    getType() {
        return "Electronic";
    }
}

class ClothingProduct extends Products {
    constructor(name: string, price: number, public size: string) {
        super(name, "Clothing", new Date().toISOString().split('T')[0], price.toString());
    }

    getProduct(): string {
        return `Clothing: ${this.name}, Size: ${this.size}, Price: $${this.price}`;
    }

    getType() {
        return "Clothing";
    }
}

class FurnitureProduct extends Products {
    constructor(name: string, price: number, public material: string) {
        super(name, "Furniture", new Date().toISOString().split('T')[0], price.toString());
    }

    getProduct(): string {
        return `Furniture: ${this.name}, Material: ${this.material}, Price: $${this.price}`;
    }

    getType() {
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

interface Stuff {

}

class Order {
        calculateTax(): void{

    }
    calculateDiscount(): void{

    }
}

class Cart {

    totalProducts(): void{

    }
}

interface OrderItems{
    checkout(item: Order): void;
    returnItem(item: Order, returnDate: Date ): void;
    
}

class Admin extends User{
    
}
class Seller extends User{

}
class Customer extends User{

}

// Encapsulation of cart/ checkout logic


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

makePayment(creditCardPayment, 100);
makePayment(payPalPayment, 200);
makePayment(bankTransferPayment, 300);


