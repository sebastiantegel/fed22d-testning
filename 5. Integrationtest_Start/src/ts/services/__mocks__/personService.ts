import { IPerson } from "../../models/IPerson";

let persons: IPerson[] = [
  { name: "Sebastian", age: 43, isMarried: true },
  { name: "Hanna", age: 43, isMarried: true },
  { name: "Astrid", age: 12, isMarried: false },
  { name: "Alvar", age: 12, isMarried: false },
];

export async function getPersons(): Promise<IPerson[]> {
  return new Promise((resolve) => {
    resolve(persons);
  });
}

export async function getPersonsByAge(age: number): Promise<IPerson[]> {
  return new Promise((resolve) => {
    if (age > 0) {
      resolve(persons.filter((p) => p.age === age));
    } else {
      resolve([]);
    }
  });
}
