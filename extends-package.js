class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name + ' roars.');
    }
}

const dog = new Dog('dog')
dog.speak();
