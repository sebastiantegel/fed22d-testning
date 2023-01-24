import { add, addCar, addPositives } from "../ts/main";
import { Car } from "../ts/models/Car";

test("should add", () => {
  let x = 4;
  let y = 10;

  let sum = add(x, y);

  expect(sum).toBe(14);
});

test("should add correctly", () => {
  // Arrange
  let x = 10;
  let y = 2;

  // Act
  let sum = addPositives(x, y);

  // Assert
  expect(sum).toBe(12);
});

test("should not add negative numbers", () => {
  // Arrange
  let x = -10;
  let y = 2;

  // Act
  let sum = addPositives(x, y);

  // Assert
  expect(sum).toBe(-1);
});

test("should add car", () => {
  // Arrange
  let brand = "Volvo";
  let model = "V90";
  let color = "Silver";
  let cars: Car[] = [new Car("Tesla", "X", "Blue")];

  let length = cars.length; // length = 1

  // Act
  addCar(brand, model, color, cars); // cars.length -> 2

  // Assert
  expect(cars.length).toBe(length + 1); // 2 = 1 + 1
  expect(cars[cars.length - 1].brand).toBe(brand);
});
