/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
}

Vehicle.prototype.toString = function () {
  return this.brand + " " + this.model + " " + this.year;
};
// Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>

Vehicle.prototype.valueOf = function () {
  return this.mileage;
};
// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
}

Car.prototype.toString = function () {
  return (
    this.brand + " " + this.model + " " + this.year + " - " + this.fuelType
  );
};
// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.

Car.prototype.accelerate = function (acceleration) {
  this.speed += acceleration;
  console.log(
    "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " прискорився до швидкості " +
      this.speed +
      " км/год"
  );
};
// Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год

Car.prototype.brake = function (deceleration) {
  this.speed -= deceleration;
  console.log(
    "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " зменшив до швидкості " +
      this.speed +
      " км/год"
  );
};
// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год

let car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);
// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

console.log(car.toString());
console.log(car.valueOf());
// Викличемо функції toString та valueOf об'єкта car

car.accelerate(50);
// Використовуємо методи для прискорення та передаємо 50

car.brake(20);
// Використовуємо методи для гальмування та передаємо 20

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage

  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
  // Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
}

Truck.prototype.tow = function (num) {
  if (num > this.towingCapacity) {
    console.log("Навантаження занадто важке для буксирування");
  } else {
    console.log("Тягнення навантаження...");
  }
};
// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...

let truck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);
// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

truck.tow(8000);
// Викликаємо метод tow з вагою меншою за towingCapacity

truck.tow(12000);
// Викликаємо метод tow з вагою більшою за towingCapacity

Car.prototype.drive = function (kilometers) {
  this.mileage += kilometers;
  console.log(
    "Подорожуємо " +
      kilometers +
      " кілометрів у " +
      this.brand +
      " " +
      this.model +
      "."
  );
};
// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.

var driveCar = car.drive.bind(car);
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.

driveCar(100);
// Викликаємо функцію зі значенням 100,

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!new.target) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"

  Car.call(this, brand, model, year, mileage);
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage

  this.batteryCapacity = batteryCapacity;
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
}

ElectricCar.prototype.toString = function () {
  return (
    this.brand +
    " " +
    this.model +
    " " +
    this.year +
    " - Батарея: " +
    this.batteryCapacity +
    " kWh"
  );
};
// Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh

let tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);
// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */

console.log(tesla.toString());
// Викликаємо метод toString об'єкту tesla та виводимо в консоль//
