class User {
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.#name} รหัสผ่าน : ${this.#password}`);
  }
  setName(newName) {
    this.#name = newName;
  }
  getName() {
    return this.#name;
  }
  setPassword(newPassword) {
    this.#password = newPassword;
  }
  getPassword() {
    return this.#password;
  }
}

const user1 = new User("user1", 111);
user1.password = "111111111";
user1.setName("edit");
user1.setPassword(1101);
console.log(user1.getName());
console.log(user1.getPassword());
