class Person {
    /*name: string;
    age: number;*/
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Professor extends Person {
    /*subject: string;
    school: string;*/
    constructor(subject, school) {
        super('', '');
        this.subject = subject;
        this.school = school;
    }
}
