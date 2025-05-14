abstract class Products {
    constructor(
        public productType: string,
        public purchaseday: string,
        public price: string, 
    ){}

    abstract getProduct(): string;
}

class ElectronicProduct extends Product {
    constructor(name: string, price: number, public warranty: number) {
        super(name, price);
    }
    getType() { return "Electronic"; }
}

class ClothingProduct extends Product {
    constructor(name: string, price: number, public size: string) {
        super(name, price);
    }
    getType() { return "Clothing"; }
}

class FurnitureProduct extends Product {
    constructor(name: string, price: number, public material: string) {
        super(name, price);
    }
    getType() { return "Furniture"; }
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

interface Borrowable{
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


