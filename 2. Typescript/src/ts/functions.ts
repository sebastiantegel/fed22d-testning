import { Car } from "./models/car";
export function add(x: number, y: number): number {
  return x + y;
}

export const addCar = (brand: string, model: string, cars: Car[]) => {
  let newCar = new Car(brand, model);

  cars.push(newCar);
};
