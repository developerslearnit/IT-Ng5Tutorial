export class Person {
     first_name;
     lastName;
     age;
     constructor(first_name,lastName,age) {
          this.first_name =first_name;
          this.lastName =lastName;
          this.age =age;
     }

     sayName():string{
          return `${this.first_name} ${this.lastName}`;
     }
}