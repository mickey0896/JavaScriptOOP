class User {
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    // this.showDetail() // cell method in class
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.#name} รหัสผ่าน : ${this.#password}`);
  }
  // รูปแบบ accessor
  set Name(newName) {
    this.#name = newName;
  }
  get Name() {
    return this.#name;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }
  get Password() {
    return this.#password;
  }
}

const user1 = new User("user1", 111);
user1.password = "111111111";
user1.Name = "edit";
user1.Password = 1101;
console.log(user1.Name);
console.log(user1.Password);
