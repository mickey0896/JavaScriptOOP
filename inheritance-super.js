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

class Teacher extends User {
  constructor(name, password) {
    super(name, password);
    console.log("คุณครู");
  }
}
class Student extends User {
  constructor(name, password) {
    super(name, password);
    console.log("นักเรียน");
  }
}

const user1 = new Teacher("Teacher1", 123);
user1.showDetail();

const user2 = new Student("dekd", 321);
user2.showDetail();
