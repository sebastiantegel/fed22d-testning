import { Car } from "./models/car";
import { add, addCar } from "./functions";

function init() {
  let sum = add(10, 20);

  let result = document.createElement("h3");
  result.innerHTML = sum.toString();

  document.body.appendChild(result);

  let car = new Car("Volvo", "V90");
  let car2 = new Car("Tesla", "S");
  let car3 = new Car("Tesla", "X");

  let cars: Car[] = [car, car2, car3];

  addCar("Nissan", "Micra", cars);

  let carsPresentation = document.createElement("h3");
  carsPresentation.innerHTML = cars.length.toString();

  document.body.appendChild(carsPresentation);
}

init();
