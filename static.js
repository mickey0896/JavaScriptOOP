class User {
  #name;
  #password;
  static database = [];

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.#name} รหัสผ่าน : ${this.#password}`);
  }
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
  static addUser(newUser) {
    this.database.push(newUser);
  }
}

User.addUser(new User("user1", 111));
User.addUser(new User("user2", 222));
User.addUser(new User("user3", 333));
User.database.map((user) => {
  return user.showDetail();
});
