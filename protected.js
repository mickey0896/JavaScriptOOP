class User {
  _name;
  #password;

  constructor(name, password) {
    this._name = name;
    this.#password = password;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this._name} รหัสผ่าน : ${this.#password}`);
  }
  set Name(newName) {
    this._name = newName;
  }
  get Name() {
    return this._name;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }
  get Password() {
    return this.#password;
  }
}

class Teacher extends User {
  #course;
  constructor(name, password, course) {
    super(name, password);
    this.#course = course;
  }
  showDetail() {
    console.log(`ชื่อ:${this._name} | ครูประจำวิชา : ${this.#course}`);
  }
}
class Student extends User {
  #score;
  constructor(name, password, score) {
    super(name, password);
    this.#score = score;
  }
  showDetail() {
    console.log(`ชื่อ:${this._name} | คะแนน : ${this.#score}`);
  }
}

const user1 = new Teacher("Teacher1", 123, "ภาษาไทย");
user1.showDetail();

const user2 = new Student("นักเรียน A", 321, 95);
user2.showDetail();

const user3 = new Student("นักเรียน B", 321, 70);
user3.showDetail();

const user4 = new Student("นักเรียน C", 321, 89);
user4.showDetail();
