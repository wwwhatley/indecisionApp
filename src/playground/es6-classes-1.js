class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
  getDescription() {
    return `Hi my name is ${this.name} and I am ${this.age}`;
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

    if (this.hasMajor) {
      description += `. Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  hasHome() {
    return !!this.home;
  }
  getDescription() {
    let desc = super.getDescription();

    if (this.hasHome) {
      desc += ` I am visiting from ${this.home}`;
    }

    return desc;
  }
}

// class Teacher extends Person {
//   constructor(name, age, college) {
//     super(name, age);
//     this.college = college;
//   }
//   whichCollege() {
//     return !!this.college;
//   }
//   getDescription() {
//     let desc = super.getDescription();

//     if (this.whichCollege) {
//       desc += `I graduated from ${this.college}`;
//     }

//     return desc;
//   }
// }

const me = new Traveler("Will", 23, "ATL");
console.log(me.getDescription());

// const me = new Teacher("Will", 23, "UGA");
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
