var Person = {
    name: "Shambel",
    age: 21,
    department: "Computer Science"
}

console.log(`My name is ${Person.name} and also my age is ${Person.age} and also my department ${Person.department}`);
  
class PersonClass{
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
    getSex(){
        return this.sex;
    }
  }


  const person1 = new PersonClass("Shambel", 21, "Male");
  const person2 = new PersonClass("Abebe", 22, "Male");
  console.log(person1.name);
  console.log(person1.getName());

  class Shambel extends PersonClass{
    constructor (name, age, sex, department){
        super(name, age, sex);
        this.department = department;
        this.college = "ABC college";
    }
  }


  const shambel1 = new Shambel("Simelo", 46, "Female", "My Mother");
  console.log(shambel1);
  console.log(shambel1.getName());