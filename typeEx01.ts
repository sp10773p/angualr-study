class Person{
    /*name: string;
    age: number;*/
    constructor(public name, public age){

    }
}

class Professor extends Person{
    /*subject: string;
    school: string;*/
    constructor(public subject, public school){
        super('', '');

    }
}