class User {
  name = "xxxxxxxx";
  password = 123456789;

  constructor(name, password) {
    this.name = name;
    this.password = password; 
    // this.showDetail() // cell method in class
  }
  //method
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.name} รหัสผ่าน : ${this.password}`);
  }
}

const user1 = new User("user1", 111);
user1.showDetail();
const user2 = new User("user2", 222);
user2.showDetail();
const user3 = new User("user3", 333);
user3.showDetail();
