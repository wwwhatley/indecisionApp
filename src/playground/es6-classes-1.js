class Person {
  constructor(name = "Anonymous") {
    this.name = name;
  }
}

const me = new Person("Will", 23, true);
console.log(me);

const other = new Person();
console.log(other);
