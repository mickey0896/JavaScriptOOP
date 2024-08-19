class User {
  //private
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    // this.showDetail() // cell method in class
  }

  showDetail() {
    this.#name = "edit-user1";
    console.log(`ชื่อผู้ใช้ : ${this.#name} รหัสผ่าน : ${this.#password}`);
  }
}

const user1 = new User("user1", 111);
user1.name = "edit-user1";
user1.password = "111111111";
user1.showDetail();
