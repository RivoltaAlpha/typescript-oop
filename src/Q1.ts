abstract class LibraryItem {
    constructor(public id: number, public item: string , public available: boolean, public borrowingDate:Date , public dueDate: Date, public returnDate: Date ){}

    abstract getItem(): string
}

interface Borrowable {
    checkout(item: LibraryItem): void;
    returnItem(item: LibraryItem, returnDate: Date): void;
}

class Book extends LibraryItem {
    constructor(
        public title: string,
        public author: string, 
        public pages: number, 
        available: boolean,  id: number, item: string, borrowingDate:Date , dueDate: Date, returnDate: Date) 
        {
        super(id, item, available, borrowingDate, returnDate, dueDate);
    }

    getItem(): string{
        return"Item book";
    }

    numberOfDays(): number {
        const theday = this.returnDate;
        const diffDays = theday.getDate() - this.dueDate.getDate();
        console.log(diffDays)
        return diffDays;
    }

    calculateFine():number {
        let totalFine = 0;
        if(!this.available){
            const fine_amount = 10;
            totalFine = this.numberOfDays() * fine_amount;
        }
        return totalFine;
    }
}

// Example 
const NeverRead = new Book(
    "Sample Title",      // title
    "Sample Author",     // author
    100,                 // pages
    false,                // available
    1,                   // id
    "Book",              // item
    new Date("2025-04-01"),          // borrowingDate
    new Date("2025-04-27"),          // returnDate
    new Date("2025-04-15")    // dueDate
)

// Example usage
// console.log(NeverRead.calculateFine()); // Output: 2

class UserAccount {
    private finedAmount: number = 0;
    private bookingHistory: LibraryItem[] = []

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

    handleLogout(): void {
        console.log("Logged out successfully");
    }

    borrowingHistory(): LibraryItem[] {
        return this.bookingHistory;
    }

    // fine calculation 
    numberOfDays(item: LibraryItem): number {
    const theday = item.returnDate;
    const diffDays = theday.getDate() - item.dueDate.getDate();
    console.log(diffDays)
    return diffDays;
    }
    calculateFine(item: LibraryItem): number {
        let totalFine = 0;
        if (!item.available) {
            const fine_amount = 10;
            totalFine = this.numberOfDays(item) * fine_amount;
        }
        return totalFine;
    }


        getFines(): number {
        return this.finedAmount;
    }
}

class Student extends UserAccount implements Borrowable{
    checkout(item: LibraryItem): void {
        if (item.available) {
            item.available = false;
        }
    }

    returnItem(item: LibraryItem, returnDate: Date): void {
        item.returnDate = returnDate;
        item.available = true;
        this.calculateFine(item);
    }
}
class Librarian extends UserAccount{
    constructor(public workNumber: string, public accountNumber: number, name: string, email:string, roleOfMember: string, password:string ){
            super(name,email,password,roleOfMember)
    }
}

// // Example usage:
// const book = new Book(1, "Sample Book", "Author", 200, true, new Date("2025-04-01"), new Date("2025-04-15"));
// const member = new Member("Alice", "alice@email.com", "Member", "pass123");

// member.checkout(book);
// // ...later
// member.returnItem(book, new Date("2025-04-20"));
// console.log("Fine:", member.getFines()); // Fine: 50