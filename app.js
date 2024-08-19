// class
class User {
  //property
  name = "xxxxxxxx";
  password = 123456789;
}

// object
const user1 = new User();
user1.name = "User 1";
user1.password = 1111111;
console.log(`user1`);
console.log(`name : ${user1.name}`);
console.log(`password : ${user1.password}`);

const user2 = new User();
user2.name = "User 2";
user2.password = 222222;
console.log(`user2`);
console.log(`name : ${user2.name}`);
console.log(`password : ${user2.password}`);
