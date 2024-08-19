class User {
  name = "xxxxxxxx";
  password = 123456789;

  //default constructor
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

const user1 = new User("user1", 111);
console.log(`user1`);
console.log(`name : ${user1.name}`);
console.log(`password : ${user1.password}`);

const user2 = new User("user2", 222);
console.log(`user2`);
console.log(`name : ${user2.name}`);
console.log(`password : ${user2.password}`);

const user3 = new User("user3", 333);
console.log(`user3`);
console.log(`name : ${user3.name}`);
console.log(`password : ${user3.password}`);
