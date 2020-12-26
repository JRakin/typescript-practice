interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Juaid',
  age: 25,
};

console.log('Name:' + user.name + ' and ' + 'age:' + user.age);

// function details(user_1: User) {
//     return 'Name: ' + user_1.name + ' age: ' + user_1.age;
//   }

function details(user_1: { name: string; age: number }) {
  return 'Name: ' + user_1.name + ' age: ' + user_1.age;
}

console.log(details(user));

console.log(
  details({
    name: 'Rakin',
    age: 25,
  })
);

// document.body.textContent = details(user);

class Student {
  fullName: string;

  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greetings(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

const student = new Student('Juaid', 'Rakin');

console.log(greetings(student));

console.log(student);
