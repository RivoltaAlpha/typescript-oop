class LibraryItem {
    constructor(public id: number, public item: string , public available: boolean, public borrowingDate:Date , public dueDate: Date, public returnDate: Date ){}
}

class Book extends LibraryItem {
    constructor(public title: string, public author: string, public pages: number, available: boolean, id: number, item: string, borrowingDate:Date , dueDate: Date, returnDate: Date) {
        super(id, item, available, borrowingDate, returnDate, dueDate);
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

// Example Book instance with placeholder values
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

class User {
    constructor(public name: string, public email:string, public roleOfMember: string, protected password:string){ }
}

class Student extends User{
    constructor(public regNumber: string, public accountNumber: number, name: string, email:string, roleOfMember: string, password:string){
        super(name,email,password,roleOfMember)
    }
}
class Librarian extends User{
    constructor(public workNumber: string, public accountNumber: number, name: string, email:string, roleOfMember: string, password:string ){
            super(name,email,password,roleOfMember)
    }
}