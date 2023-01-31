import axios from "axios";
import { IPerson } from "../models/IPerson";

export async function getPersons(): Promise<IPerson[]> {
  let response = await axios.get<IPerson[]>("...");
  return response.data;
}

export async function getPersonsByAge(age: number): Promise<IPerson[]> {
  if (age > 0) {
    let response = await axios.get<IPerson[]>("..." + age);
    return response.data;
  }

  return [];
}
