

class Person { 
    constructor(name = 'Anonymous' , age = 0) {
        this.name = name;    
        this.age = age;
    }

    getGretting() {
        //return "Hi. I am " + this.name + '!';
        return `Hi I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }
    
};

class Student extends Person{
    constructor(name, age, major = '') {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }

    getDescription (){
        let description = super.getDescription();
        if(this.hasMajor())
        {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age, homeLocation = ''){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let greeting = super.getGretting();
        if(this.hasHomeLoc())
        greeting += ` Im visiting from ${this.homeLocation}`;
        return greeting;
    }

    hasHomeLoc() { 
        return !!this.homeLocation
    }


}

const me = new Student('Johnattan Barona', 25, 'Computer Science');
console.log(me);
console.log(me.getGretting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Person();
console.log(other);
console.log(other.getGretting());
console.log(other.getDescription());


const traveler = new Traveler('Johnattan Barona', 25, 'Florida');
console.log(traveler);
console.log(traveler.getGretting());
console.log(traveler.getDescription());

const traveler1 = new Traveler();
console.log(traveler1);
console.log(traveler1.getGretting());
console.log(traveler1.getDescription());