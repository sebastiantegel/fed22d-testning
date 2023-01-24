import { Car } from "./models/Car";

export function add(x: number, y: number): number {
  return x + y;
}

export function addPositives(x: number, y: number): number {
  if (x >= 0 && y >= 0) {
    return x + y;
  }

  return -1;
}

let cars: Car[] = [];

export function addCar(b: string, m: string, c: string, theList: Car[]) {
  let car = new Car(b, m, c);

  theList.push(car);
}
