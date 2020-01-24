class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${ this.name }!!`;
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = 'Nowhere') {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm travelling from ${this.homeLocation}.`
        }
        return greeting
    }

}

const me = new Student('Noelle Barber', 30, 'fine arts');
const enti = new Traveler();
const you = new Traveler('Nawal Bilali', 49, 'Berlin')

console.log(me)

console.log(enti)

console.log(you)
