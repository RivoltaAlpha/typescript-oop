abstract class Person {
    constructor(public name: string, public email:string, public roleOfMember: string, protected password:string){ }

    IdentifyPerson(): string {
        return `Name: ${this.name}, Email: ${this.email}, Role: ${this.roleOfMember}`;
    }
}

class UniAdmin extends Person {
    constructor(name: string, email: string, roleOfMember: string, password: string) {
        super(name, email, roleOfMember, password);
    }

    IdentifyPerson(): string {
        return `Admin - ${super.IdentifyPerson()}`;
    }

}
class UniStudent extends Person {
    constructor(name: string, email: string, roleOfMember: string, password: string) {
        super(name, email, roleOfMember, password);
    }

    IdentifyPerson(): string {
        return `Student - ${super.IdentifyPerson()}`;
    }
}
class Lecturer extends Person {
    constructor(name: string, email: string, roleOfMember: string, password: string) {
        super(name, email, roleOfMember, password);
    }

    IdentifyPerson(): string {
        return `Lecturer - ${super.IdentifyPerson()}`;
    }

}

class Course {
    constructor(public courseName: string, public courseCode: string, public credits: number) { }
}


Enrollment Class → maps students to courses with grading logic

// Assessment Interface implemented by Quiz, Assignment, Project
interface Assessment {
    title: string;
    maxScore: number;

    grade(score: number): string;
}

class EncapsulatedAssesment implements Assessment{
    constructor(
    public  title: string,
    public maxScore: number,
    ){}

    abstract grade(score: number): string;

    protected gradeCalculation(score: number): string {
        const percentage = (score / this.maxScore) * 100;
        if (percentage >= 90) return "A";
        if (percentage >= 80) return "B";
        if (percentage >= 70) return "C";
        if (percentage >= 60) return "D";
        return "F";
    }
}

class Quiz extends EncapsulatedAssesment {
    grade(score: number): string {
        return this.gradeCalculation(score);
    }
}

class Assignment extends EncapsulatedAssesment {
    grade(score: number): string {
        return this.gradeCalculation(score);
    }
}

class Project extends EncapsulatedAssesment {
    grade(score: number): string {
        return this.gradeCalculation(score);
    }
}


// Notification System for reminders and feedback
class Notification {
    constructor(public message: string, public recipient: string) { }

    sendNotification(): void {
        console.log(`Notification sent to ${this.recipient}: ${this.message}`);
    }
    sendFeedback(): void {
        console.log(`Feedback sent to ${this.recipient}: ${this.message}`);
    }
}

