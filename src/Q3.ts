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

// Assessment Interface implemented by Quiz, Assignment, Project
interface Assessment {
    title: string;
    maxScore: number;

    grade(score: number): string;
}

abstract class EncapsulatedAssesment implements Assessment{
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

// Composite pattern for Course Content.
interface CourseContent {
    getTitle(): string;
}

// Component Interface
interface CourseContent {
    getTitle(): string;
}

// Leaf classes
class Lecture implements CourseContent {
    constructor(private title: string) {}
    getTitle(): string { 
        console.log(`Lecture: ${this.title}`);
        return this.title; 
    }
}

class AssignmentContent implements CourseContent {
    constructor(private title: string) {}
    getTitle(): string { 
        console.log(`Assignment: ${this.title}`);
        return this.title; 
    }
}

// Composite class
class Module implements CourseContent {
    private contents: CourseContent[] = [];
    constructor(private title: string) {}

    addContent(content: CourseContent): void {
        this.contents.push(content);
    }

    getTitle(): string { 
        console.log(`Module: ${this.title}`);
        return this.title; 
    }
}



// Notification System for reminders and feedback
class NotificationSystem {
    constructor(public message: string, public recipient: string) { }

    sendNotification(): void {
        console.log(`Notification sent to ${this.recipient}: ${this.message}`);
    }
    sendFeedback(): void {
        console.log(`Feedback sent to ${this.recipient}: ${this.message}`);
    }
}

class Enrollment {
    constructor(
        public student: UniStudent,
        public course: Course,
        private assessments: []
    ) {}

    submitAssessment(assessment: Assessment, score: number): void {
    }

}
